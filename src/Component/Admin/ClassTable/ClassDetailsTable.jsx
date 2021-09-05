import React, {useEffect, useState} from 'react'
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {green} from "@material-ui/core/colors";
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import {useDispatch, useSelector} from "react-redux";
import {deleteClasses, getClasses} from "../../../Action/Class";
import './ClassDetails.css'
import {TextField} from "@material-ui/core";
import * as row from "react-file-base64";
import {fetchTeachers} from "../../../Action/Users";


const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.info.dark,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 40,
        borderRadius: 50
    },
    editorContentClass: {
        borderRadius: 30
    },
});

function ClassDetailsTable() {

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    // const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const classDetails = useSelector((state) => state.classes.classRecords.records);
    console.log('CLASS DETAIL', classDetails);

    React.useEffect(() => {
        // setIsLoading(dataLoading);
        dispatch(getClasses());
    }, []);


    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const confirmDelete = (id) => {
        if (
            window.confirm(
                "Are you sure you want to delete the class? This action cannot be undone"
            )
        ) {
            dispatch(deleteClasses(id));
            alert("Delete the class");
            setTimeout(function(){
                dispatch(getClasses());
            }, 100);

        }

        // setTimeout(() => dispatch(getClasses()), 1000);
    }
    return (
        <React.Fragment>
            {/*<div className="class-table-component">*/}
            {/*    <div className="input-table-container">*/}
            <div className="classTableBackground">
                <div className="class-table-title-header">
                    <h1 className="title-classTable">Class Details Table</h1>
                    <div className="search-bar-class-table">
                        <TextField
                            id="filled-full-width"
                            label="Search"
                            placeholder="Search by name.."
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            className="search-teacher"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            style={{backgroundColor: "#FFFFFF", width: 300, borderRadius: 30}}
                        />
                    </div>
                    {/*<div className="search-bar-class-table">*/}
                    {/*    <TextField*/}
                    {/*        id="filled-full-width"*/}
                    {/*        // label="Search"*/}
                    {/*        placeholder="Search Items.."*/}
                    {/*        fullWidth*/}
                    {/*        margin="normal"*/}
                    {/*        // variant="outlined"*/}
                    {/*        className="search-class"*/}
                    {/*        style={{backgroundColor: "#FFFFFF", width: 300, height: 30, borderRadius: 30}}*/}
                    {/*    />*/}
                    {/*</div>*/}

                </div>
                <TableContainer component={Paper} className={classes.editorContentClass}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead className="class-table-header">
                                <TableRow>
                                    <TableCell align="center" className="classTablerow">Class name</TableCell>
                                    <TableCell align="center" className="classTablerow">Description</TableCell>
                                    <TableCell align="center" className="classTablerow">Teacher name</TableCell>
                                    {/*<TableCell align="center" className="classTablerow">Image</TableCell>*/}
                                    <TableCell align="center" className="classTablerow">Delete</TableCell>
                                    <TableCell align="center" className="classTablerow">Update</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {classDetails?.filter((val) => {
                                    if(searchTerm == ""){
                                        return val
                                    }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                        return val
                                    }
                                })
                                // slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => (
                                    <StyledTableRow key={row.id}>
                                        {/*<StyledTableCell align="center">{row.id}</StyledTableCell>*/}
                                        <StyledTableCell align="center">{row.name}</StyledTableCell>
                                        <StyledTableCell align="center">{row.description}</StyledTableCell>
                                        <StyledTableCell align="center">{row.tutorName}</StyledTableCell>
                                        {/*<StyledTableCell align="center">{row.image}</StyledTableCell>*/}
                                        <TableCell align="center">
                                            <DeleteIcon  color="primary" style={{fontSize: 35 }}
                                            onClick={() => {confirmDelete(row.id)}}/>
                                        </TableCell>
                                        <TableCell align="center">
                                            <EditIcon style={{ color: green[500], fontSize: 35 }}/>
                                        </TableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                        colSpan={3}
                                        count={10}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        SelectProps={{
                                            inputProps: { 'aria-label': 'rows per page' },
                                            native: true,
                                        }}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                        // ActionsComponent={TablePaginationActions}
                                    />
                                </TableRow>
                            </TableFooter>
                        </Table>
                </TableContainer>
            </div>

            {/*    </div>*/}
            {/*</div>*/}
        </React.Fragment>

    )
}

export default ClassDetailsTable;