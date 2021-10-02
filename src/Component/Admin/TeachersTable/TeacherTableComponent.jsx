
import React, {useEffect, useState} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";
import {createTheme, makeStyles, styled, TextField} from "@material-ui/core";
import './teacherTable.css'
import teacherDeleteimage1 from "./images/teacherDelete-image1.png";
import {useDispatch, useSelector} from "react-redux";
import {deleteUsers, fetchStudents, fetchTeachers, fetchUser} from "../../../Action/Users";
import {useHistory} from "react-router";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import SucessPopUp from "../../PopupModel/SucessPopUp";
import PopUpTeacherStatusComponent from "../../PopupModel/TeacherStatus/PopUpTeacherStatusComponent";
import {purple} from "@material-ui/core/colors";
function TeacherTableComponent(props) {


    const dispatch = useDispatch();
    const history = useHistory();

    const [searchTerm, setSearchTerm] = useState("");
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [popupId, setPopupId] = useState("");
    const [popupStatus, setPopupStatus] = useState("");
    const [page, setPage] = React.useState(0);



    const [filteredData, setFilteredData] = useState(props?.teacherdetails);

    useEffect(() => {
        setPage(0);

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
            borderRadius: 8.74,
        },
        teacherContent: {
            borderRadius: 8.74,
            maxWidth: "810%"
        },
        teacherTableHeaderColumns: {
            color: 'white',
            width: '200px',

        },

        // export const useStyle = makeStyles((theme) => ({
        //     root: {
        //         "& .MuiFormControl-root": {
        //             width: "80%",
        //             margin: theme.spacing(1),
        //         },
        //     },
        // }));
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


    const buttonStatus = (id, status) => {
        setPopupId(id);
        setPopupStatus(status);
        setButtonPopup(true);
    }

    return (
        <React.Fragment>
            <div className="Teacher-table-background">
                <div className="teacher-table-title-header">
                    <h1 className="title-teacherTable">Teacher Details Table</h1>
                    <div className="search-bar-teacher-table">
                        <TextField
                            placeholder="Search by name.."

                            margin="normal"
                            className="search-teacher"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            style={{backgroundColor: "#FFFFFF", width: 300, borderRadius: 8.74, height: 30, paddingLeft: 10}}
                        />
                    </div>

                </div>
                <div className="login-component-4">
                    <PopUpTeacherStatusComponent trigger={buttonPopup} setTrigger = {setButtonPopup} name1 = {popupId} name2 = {popupStatus}/>
                </div>
                <TableContainer component={Paper} className={classes.teacherContent}>

                    <Table className={classes.table} aria-label="simple table">
                        <TableHead className="teacher-table-header">
                            <TableRow >
                                <TableCell align="center" className={classes.teacherTableHeaderColumns}>Name</TableCell>
                                <TableCell align="center" className={classes.teacherTableHeaderColumns}>Email</TableCell>
                                <TableCell align="center" className={classes.teacherTableHeaderColumns}>Age</TableCell>
                                <TableCell align="center" className={classes.teacherTableHeaderColumns}>User Name</TableCell>
                                <TableCell align="center" className={classes.teacherTableHeaderColumns}>Status</TableCell>
                                <TableCell align="center" className={classes.teacherTableHeaderColumns}>Delete</TableCell>
                                <TableCell align="center" className={classes.teacherTableHeaderColumns}>Approve Teacher</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {props?.teacherdetails?.filter((val) => {
                                console.log(props?.teacherdetails)
                                if(searchTerm.trim() === ""){
                                    return val
                                }else if(val?.name.toLowerCase().includes(searchTerm?.toLowerCase())){
                                    return val
                                }else if(val?.email.toLowerCase().includes(searchTerm?.toLowerCase())){
                                    return val
                                }else if(val?.age.toLowerCase().includes(searchTerm?.toLowerCase())){
                                    return val
                                }else if(val?.username.toLowerCase().includes(searchTerm?.toLowerCase())){
                                    return val
                                }else if(val?.type.toLowerCase().includes(searchTerm?.toLowerCase())){
                                    return val
                                }
                            })
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => (
                                    <TableRow key={row?.id}>
                                        <TableCell align="center"> {row?.name} </TableCell>
                                        <TableCell align="center"> {row?.email} </TableCell>
                                        <TableCell align="center"> {row?.age} </TableCell>
                                        <TableCell align="center"> {row?.username} </TableCell>
                                        <TableCell align="center"> {row?.status} </TableCell>
                                        <TableCell align="center">
                                            <a onClick={() => {
                                                deleteTeacher(row?.id)}}>
                                                <img src= {teacherDeleteimage1}  className="teacherDelete-image1"/>
                                            </a>

                                        </TableCell>
                                        <TableCell align="center">
                                            <button type="button" onClick={() => {buttonStatus(row?.id, row?.status)}} className="btn btn-info">Update</button>
                                            {/*<a onClick={() => {*/}
                                            {/*    deleteTeacher(row.id)}}>*/}
                                            {/*    <img src= {teacherDeleteimage1}  className="teacherDelete-image1"/>*/}
                                            {/*</a>*/}
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>

                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={3}
                    count={filteredData ? filteredData.length : 1}
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

export default TeacherTableComponent
