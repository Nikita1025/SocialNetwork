import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {
    Arr,
    follow,
    followingInProgressAC,
    setIsFetching,
    setPage,
    setTotalCount,
    setUsers,
    unfollow
} from "../../Redux/user-reducer";
import {Users} from "./Users";
import Preolader from "../Comman/Preolader/Preolader";
import {getUsers} from "../../api/api";

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
    setUsers: (users: Array<usersType>) => void
    setPage: (pageNumber: number) => void
    setTotalCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean)=>void
    followingInProgressAC: (isFetching: boolean,userID: number)=>void
}
export type UsersType = MapStateToPropsType & mapDispatchToPropsType
export const UsersAPIComponent = (props: UsersType) => {
    let {users, setUsers, setTotalCount, setPage, pageSize, currentPage} = props
    if (users.length === 0) {
        props.setIsFetching(true)

        getUsers(currentPage, pageSize).then(data => {
            props.setIsFetching(false)
            setUsers(data.items)
            setTotalCount(data.totalCount)
        })
    }
    const onClickHandler = (pageNumber: number) => {
        setPage(pageNumber)
        props.setIsFetching(true)
            getUsers(pageNumber, pageSize)
            .then(data => {
            props.setIsFetching(false)
            setUsers(data.items)

        })
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
                   followingInProgressAC={props.followingInProgressAC}
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
    unfollow, setUsers,setTotalCount, setPage, setIsFetching,
    followingInProgressAC

})(UsersAPIComponent)
