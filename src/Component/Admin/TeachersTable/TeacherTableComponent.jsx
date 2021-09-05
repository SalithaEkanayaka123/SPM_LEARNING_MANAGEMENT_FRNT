
import React, {useEffect, useState} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";
import {makeStyles, TextField} from "@material-ui/core";
import './teacherTable.css'
import teacherDeleteimage1 from "./images/teacherDelete-image1.png";
import {useDispatch, useSelector} from "react-redux";
import {deleteUsers, fetchStudents, fetchTeachers, fetchUser} from "../../../Action/Users";
import {useHistory} from "react-router";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import SucessPopUp from "../../PopupModel/SucessPopUp";
import PopUpTeacherStatusComponent from "../../PopupModel/TeacherStatus/PopUpTeacherStatusComponent";
function TeacherTableComponent() {


    const dispatch = useDispatch();
    const history = useHistory();

    const [searchTerm, setSearchTerm] = useState("");
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [popupName, setPopupName] = useState("");
    const [popupLocation, setPopupLocaion] = useState("");
    //const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const response = useSelector((state) => state.userDetails1.UserDetails.records.data);
    console.log(response);

    useEffect(() => {
        console.log('calling')
        dispatch(fetchTeachers());
    },[])

    const deleteTeacher = (id) => {
        dispatch(deleteUsers(id))
        setTimeout(function(){
            dispatch(fetchTeachers());
        }, 100);
    }
    const useStyles = makeStyles({
        table: {
            maxWidth: "710%",
            borderRadius: 30,
        },
        teacherContent: {
            borderRadius: 30,
            maxWidth: "810%"
        },
        teacherTableHeaderColumns: {
            color: 'white',
            width: 200
        },
    });
    const classes = useStyles();


    const handleChangePage = () => {

    }

    const handleChangeRowsPerPage= () => {

    }

    const buttonStatus = () => {
        setButtonPopup(true);
    }

    return (
        <div className="Teacher-table-background">
            <div className="teacher-table-title-header">
                <h1 className="title-teacherTable">Teacher Details Table</h1>
                <div className="search-bar-teacher-table">
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

            </div>
            <div className="login-component-4">
                <PopUpTeacherStatusComponent trigger={buttonPopup} setTrigger = {setButtonPopup} name1 = {popupName} name2 = {popupLocation}/>
            </div>
            <TableContainer component={Paper} className={classes.teacherContent}>

                <Table className={classes.table} aria-label="simple table">
                    <TableHead className="teacher-table-header">
                        <TableRow >
                            <TableCell align="center" className={classes.teacherTableHeaderColumns}>id</TableCell>
                            <TableCell align="center" className={classes.teacherTableHeaderColumns}>Name</TableCell>
                            <TableCell align="center" className={classes.teacherTableHeaderColumns}>Email</TableCell>
                            <TableCell align="center" className={classes.teacherTableHeaderColumns}>User Name</TableCell>

                            <TableCell align="center" className={classes.teacherTableHeaderColumns}>Status</TableCell>
                            <TableCell align="center" className={classes.teacherTableHeaderColumns}>Password</TableCell>
                            <TableCell align="center" className={classes.teacherTableHeaderColumns}>Delete</TableCell>
                            <TableCell align="center" className={classes.teacherTableHeaderColumns}>Approve Teacher</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {response?.filter((val) => {
                            if(searchTerm == ""){
                                return val
                            }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val
                            }
                        }).map((row) => (
                            console.log(row),
                                <TableRow key={row.id}>
                                    <TableCell align="center"> {row.id} </TableCell>
                                    <TableCell align="center"> {row.name} </TableCell>
                                    <TableCell align="center"> {row.email} </TableCell>
                                    <TableCell align="center"> {row.username} </TableCell>
                                    <TableCell align="center"> {row.status} </TableCell>
                                    <TableCell align="center"> {row.password} </TableCell>
                                    <TableCell align="center">
                                        <a onClick={() => {
                                            deleteTeacher(row.id)}}>
                                            <img src= {teacherDeleteimage1}  className="teacherDelete-image1"/>
                                        </a>

                                    </TableCell>
                                    <TableCell align="center">
                                        <button type="button" onClick={buttonStatus} className="btn btn-info">Update</button>
                                        {/*<a onClick={() => {*/}
                                        {/*    deleteTeacher(row.id)}}>*/}
                                        {/*    <img src= {teacherDeleteimage1}  className="teacherDelete-image1"/>*/}
                                        {/*</a>*/}
                                    </TableCell>
                                </TableRow>
                        ))
                        }
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={3}
                                count={10}
                                rowsPerPage={rowsPerPage}
                                page={6}
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
    )
}

export default TeacherTableComponent
