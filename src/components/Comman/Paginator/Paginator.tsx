import React from 'react';
import s from "../../Users/Users.module.css";


type UsersComp = {
    pageSize: number
    totalCount: number
    currentPage: number
    onClickHandler: (pageNumber: number) => void
}
export const Paginator:React.FC<UsersComp> = ({onClickHandler, pageSize, currentPage, totalCount}) => {
    let pageCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= 20; i++) {
        pages.push(i)
    }

    return<div>
            <div className={s.page}>
                {pages.map((el, index) => {
                    return <span key={index} onClick={(event) => {
                        onClickHandler(el)
                    }}
                                 className={currentPage === el ? s.selectorPage : undefined}>{el}</span>
                })}
            </div>
        </div>
};

