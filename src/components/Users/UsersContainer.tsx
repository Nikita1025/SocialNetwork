import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {
    Arr,
    follow,
    followingInProgressAC, getUsersThunkCreator,
    setPage,
    unfollow
} from "../../Redux/user-reducer";
import {Users} from "./Users";
import Preolader from "../Comman/Preolader/Preolader";


export type MapStateToPropsType = {
    users: Array<usersType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<Arr>
}

export type usersType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string

}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsersThunkCreator: (currentPage:number, pageSize:number)=> void
    setPage:(currentPage: number)=>void
}
export type UsersType = MapStateToPropsType & mapDispatchToPropsType
export const UsersAPIComponent = (props: UsersType) => {
    let {users, getUsersThunkCreator, pageSize,currentPage} = props
    if (users.length === 0) {
        getUsersThunkCreator(currentPage, pageSize)
    }
    const onClickHandler = (pageNumber: number) => {
        getUsersThunkCreator(pageNumber, pageSize)
    }
    return (<>
            {props.isFetching ? <Preolader/> : null}
            <Users users={props.users}
                   unfollow={props.unfollow}
                   follow={props.follow}
                   pageSize={pageSize}
                   currentPage={props.currentPage}
                   onClickHandler={onClickHandler}
                   totalCount={props.totalCount}
                   arr={props.followingInProgress}
            />
        </>
    )
}
let mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default connect(mapStateToProps, {follow,
    unfollow, setPage,
    followingInProgressAC, getUsersThunkCreator

})(UsersAPIComponent)
