import {RootState} from "./redux-store";
import {createSelector} from "reselect";


export const getPageSize = (state: RootState) => {
    return state.usersPage.pageSize
}
export const getTotalCount = (state: RootState) => {
    return state.usersPage.totalCount
}
export const getCurrentPage = (state: RootState) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: RootState) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: RootState) => {
    return state.usersPage.followingInProgress
}
export const getUsers = (state: RootState) => {
    return state.usersPage.users
}
export const getUsersSuper = createSelector(getUsers,(users) => {
    return users.filter(u => true)
})
export const getUsersSelector = (state: RootState) => {
    return getUsers(state).filter(u => true)
}