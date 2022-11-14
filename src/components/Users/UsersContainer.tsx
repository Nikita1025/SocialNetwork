import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../Redux/user-reducer";
import axios from "axios";
import {Users} from "./Users";


export type MapStateToPropsType = {
    users: Array<usersType>
    pageSize: number
    totalCount: number
    currentPage: number
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
    setCurrentPage: (pageNumber: number) => void
    setTotalCount: (totalCount: number) => void
}
export type UsersType = MapStateToPropsType & mapDispatchToPropsType
export const UsersAPIComponent = (props: UsersType) => {
    let {users, setUsers, setTotalCount, setCurrentPage, pageSize} = props
    if (users.length === 0) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`).then(response => {
            setUsers(response.data.items)
            setTotalCount(response.data.totalCount)
        })
    }
    const onClickHandler = (pageNumber: number) => {
        setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`).then(response => {
            setUsers(response.data.items)
        })
    }
    return (<>
            <Users users={props.users}
                   unfollow={props.unfollow}
                   follow={props.follow}
                   pageSize={pageSize}
                   currentPage={props.currentPage}
                   onClickHandler={onClickHandler}
                   totalCount={props.totalCount}/>
        </>
    )
}
let mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<usersType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setPageAC(pageNumber))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
