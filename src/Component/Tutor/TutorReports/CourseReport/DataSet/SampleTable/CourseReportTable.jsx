import React, {useEffect, useState} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import {makeStyles, TableCell, TextField} from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import {useDispatch} from "react-redux";
import TablePagination from "@material-ui/core/TablePagination";
import './CourseReportTable.css'
import CustomRow from "../../../../CourseMgntInt/CustomRow/CustomRow";
function CourseReportTable({array}) {

    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);

    const useStyles = makeStyles({
        table: {
            maxWidth: "710%",
            borderRadius: 8.74,

        },
        sampleContent: {
            borderRadius: 8.74,
            maxWidth: "810%",
            maxHeight: '600px'
        },
        tableHeaderColumns: {
            color: 'white',
            width: '200px',
            fontSize: '10px',
            height: 1

        },

        tableHead: {
            height: 1,
            backgroundColor: 'blue'
        }

    });

    const classes = useStyles();

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <React.Fragment>
            <div className="report-course-table-container">
                <div className="teacher-table-title-header">
                    <h1 className="title-header">Course Content</h1>
                </div>
                <TableContainer component={Paper} className={classes.sampleContent}>

                    <Table padding={"none"} className={classes.table} aria-label="simple table">
                        <TableHead className={classes.tableHead}>
                            <TableRow >
                                <TableCell align="center" className={classes.tableHeaderColumns}>Course Name</TableCell>
                                <TableCell align="center" className={classes.tableHeaderColumns}>Medium</TableCell>
                                <TableCell align="center" className={classes.tableHeaderColumns}>Description</TableCell>
                                <TableCell align="center" className={classes.tableHeaderColumns}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {array?.map((item) => (
                                <TableCell align="center" className={classes.tableHeaderColumns}>{item}</TableCell>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={3}
                    count={5}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                        inputProps: { 'aria-label': 'rows per page' },
                        native: true,
                    }}
                    component="div"
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>
        </React.Fragment>

    )
}

export default  CourseReportTable
