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
import {deleteClasses, getClasses, getClassesNew} from "../../../Action/Class";
import './ClassDetails.css'
import {Button, TextField} from "@material-ui/core";
import PopUpUpdate from "../ClassMgntInt/PopUpUpdate/PopUpUpdate";
import CloudDownloadTwoToneIcon from '@material-ui/icons/CloudDownloadTwoTone';

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
        minWidth: "100%",
        borderRadius: 50
    },
    editorContentClass: {
        borderRadius: 30,
        maxWidth: "300%",
    },
});

function ClassDetailsTable({method}) {

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [buttonPopupUpdate, setButtonPopupUpdate] = useState(false);
    // const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const classDetails = useSelector((state) => state.classes?.classRecords?.records);
    console.log(classDetails);
    const [filteredData, setFilteredData] = useState(classDetails);
    const [popupData,setPopupData] = useState("");
    React.useEffect(() => {
        // setIsLoading(dataLoading);
        dispatch(getClassesNew());
    }, []);

    const updateClass = (id) => {
        console.log(id);
        setPopupData(id);
        method(id)
        setButtonPopupUpdate(true);
    }


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

    const handleCellClick = (row) => {
        console.log('calling onclick',row)

    }

    // File Download method.
    async function downloadImages (imageName) {
        fetch(`http://localhost:8073/api/download/image/${imageName}`)
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = `${imageName}`;
                    a.click();
                });

            });
    }

    return (
        <React.Fragment>
            <div className="classTableBackground">
                <div className="class-table-title-header">
                    <h1 className="title-classTable">Class Details Table</h1>
                    <div className="search-bar-class-table">
                        <TextField
                            placeholder="Search by class name.."
                            margin="normal"
                            className="search-class"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            style={{backgroundColor: "#FFFFFF", width: 300, borderRadius: 8.74, height: 30, paddingLeft: 10}}
                        />
                    </div>
                </div>
                <div style={{ margin: 'auto'}}>
                    <PopUpUpdate trigger={buttonPopupUpdate} setTrigger = {setButtonPopupUpdate} popupData={popupData}/>
                </div>
                <TableContainer component={Paper} className={classes.editorContentClass}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead className="class-table-header">
                                <TableRow>
                                    <TableCell align="center" className="classTablerow">Class name</TableCell>
                                    <TableCell align="center" className="classTablerow">Description</TableCell>
                                    <TableCell align="center" className="classTablerow">Teacher name</TableCell>
                                    <TableCell align="center" className="classTablerow">Image</TableCell>
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
                                        console.log(row),
                                    <StyledTableRow key={row.id} >
                                        {/*<StyledTableCell align="center">{row.id}</StyledTableCell>*/}
                                        <StyledTableCell align="center">{row.name}</StyledTableCell>
                                        <StyledTableCell align="center">{row.description}</StyledTableCell>
                                        <StyledTableCell align="center">{row.tutorName}</StyledTableCell>
                                        {/*<StyledTableCell align="center">{row.image}</StyledTableCell>*/}
                                        <TableCell align="center">
                                            <CloudDownloadTwoToneIcon  color="secondary" style={{fontSize: 35 }}
                                            onClick={() => downloadImages(`${row.image}`)} />
                                        </TableCell>
                                        <TableCell align="center">
                                            <DeleteIcon  color="primary" style={{fontSize: 35 }}
                                            onClick={() => {confirmDelete(row.id)}}/>
                                        </TableCell>
                                        <TableCell align="center">
                                            <EditIcon style={{ color: green[500], fontSize: 35 }}
                                            onClick={() => {updateClass(row)}}
                                            />
                                        </TableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                        colSpan={3}
                                        count={filteredData ? filteredData.length : 1}
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
                                </TableRow>
                            </TableFooter>
                        </Table>
                </TableContainer>
            </div>
        </React.Fragment>

    )
}

export default ClassDetailsTable;