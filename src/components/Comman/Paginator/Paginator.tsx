import React, {useState} from 'react';
import s from "../../Users/Users.module.css";


type UsersComp = {
    pageSize: number
    totalCount: number
    currentPage: number
    onClickHandler: (pageNumber: number) => void
    portionSize: number
}
export const Paginator:React.FC<UsersComp> = ({onClickHandler, pageSize, currentPage, totalCount,portionSize}) => {
    let pageCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= 20; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pageCount / pageSize)
    let [portionNumber, setPortionNumber]=useState(1)
    let leftPortionPageNumber = (portionNumber -1)* portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return<div>
            <div className={s.page}>
                {pages
                    .filter(el => el >= leftPortionPageNumber && el<=rightPortionPageNumber)
                    .map((el, index) => {
                    return <span key={index} onClick={(event) => {
                        onClickHandler(el)
                    }}
                                 className={currentPage === el ? s.selectorPage : undefined}>{el}</span>
                })}
            </div>
        </div>
};

