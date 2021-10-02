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
import './SampleTable.css'
function SampleTable() {


    const dispatch = useDispatch();
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);

    const useStyles = makeStyles({
        table: {
            maxWidth: "710%",
            borderRadius: 8.74,
        },
        sampleContent: {
            borderRadius: 8.74,
            maxWidth: "810%"
        },
        tableHeaderColumns: {
            color: 'white',
            width: '200px',

        },

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
            <div className="Teacher-table-background">
                <div className="teacher-table-title-header">
                    <h1 className="title-teacherTable">Table Header</h1>
                </div>
                <TableContainer component={Paper} className={classes.sampleContent}>

                    <Table className={classes.table} aria-label="simple table">
                        <TableHead className="sample-table-header">
                            <TableRow >
                                <TableCell align="center" className={classes.tableHeaderColumns}>name 1</TableCell>
                                <TableCell align="center" className={classes.tableHeaderColumns}>name 2</TableCell>
                                <TableCell align="center" className={classes.tableHeaderColumns}>name 3</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        </TableBody>
                    </Table>

                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={3}
                    count={5}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    //classes={{ ul: classes.ul }}
                    SelectProps={{
                        inputProps: { 'aria-label': 'rows per page' },
                        native: true,
                    }}
                    component="div"
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    //className={classes.table}
                />
            </div>
        </React.Fragment>

    )
}

export default  SampleTable