import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TablePagination from '@mui/material/TablePagination';
import React, {useEffect, useState} from 'react';
import s from "../../Users/Users.module.css";


type UsersComp = {
    pageSize: number
    totalCount: number
    currentPage: number
    onPageChanged: (page: number, pageSize?: number) => void
    portionSize?:number

}
export const Paginator:React.FC<UsersComp> = ({ totalCount,
                                                  pageSize,
                                                  onPageChanged,
                                                  currentPage}) => {
    const [rowsPerPage, setRowsPerPage] = useState(pageSize);
    useEffect(() => {
        if (pageSize === rowsPerPage) return
        setRowsPerPage(pageSize)
    }, [pageSize])

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        onPageChanged(1, parseInt(event.target.value, 10))
    };
    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
        onPageChanged(page + 1, rowsPerPage)
    };
    return (
        <TablePagination
            component="div"
            labelRowsPerPage="Users per page:"
            count={totalCount}
            page={currentPage - 1}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    )
};

