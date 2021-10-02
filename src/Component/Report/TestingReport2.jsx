import React, {useEffect, useState} from 'react'
import {FormControl, InputLabel, MenuItem, styled, TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Select from "react-select";
import Button from "@progress/kendo-react-buttons/dist/es/Button";
import {fetchStudents, fetchUser} from "../../Action/Users";
import {useDispatch, useSelector} from "react-redux";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import studentDeleting1 from "../Tutor/StudentTable/images/studentDelete-image1.png";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import * as tableCellClasses from "react-file-base64";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '60ch',
            margin: theme.spacing(1)
        }
    },
    paymentType: {
        width: '30ch',
        height: '4vw'
    },
    paymentType1: {
        width: '20ch',
        height: '4vw'
    },
    stage1: {
        marginBottom: '20px'
    },
    stage2: {
        marginLeft: '3px'
    },
    stage3: {
        padding: '70px',
        //marginLeft: '3px',
        marginBottom: '10px'
    },
    titlecontainer: {
        marginLeft: '3px',
        marginTop: '10px',
        padding: 'auto',

    },
    title1: {
        color:'#000000',
        font: '4vw'
    },
    header: {

        background: '#A0E7E5'
    }
}))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    // [`&.${tableCellClasses.head}`]: {
    //     backgroundColor: theme.palette.common.black,
    //     color: theme.palette.common.white,
    // },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, age, email, status, type) {
    return { name, age, email, status, type };
}


const TestingReport2 = (props) => {
    console.log(props?.age)
    console.log(props?.age1)
    const dispatch = useDispatch();
    const [age, setAge] = useState(props?.age)
    const [age1, setAge1] = useState(props?.age1)
    const [age2, setAge2] = useState(0)
    const classes = useStyles();

    useEffect(() => {
        //setPage(0);
        console.log('calling')
        dispatch(fetchUser());
    },[])

    const response = useSelector((state) => state.userDetails1?.UserDetails?.records?.data);
    console.log(response);

    return (
        <React.Fragment>



            <div>
                <div className={classes.titlecontainer}><h5 className={classes.title1}>Age gap is {age} to {age1}</h5></div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead className={classes.header}>
                                <TableRow >
                                    <StyledTableCell  className={classes.header} align="right">Name</StyledTableCell>
                                    <StyledTableCell align="right">age</StyledTableCell>
                                    <StyledTableCell align="right">email</StyledTableCell>
                                    <StyledTableCell align="right">username</StyledTableCell>
                                    <StyledTableCell align="right">type</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {response?.filter((val) => {
                                    if(age  < val?.age && age1 > val?.age){
                                        console.log(val)
                                        return val;
                                    }
                                })

                                    .map((row) => (
                                    <StyledTableRow key={row?.id}>
                                        <StyledTableCell align="right">
                                            {row?.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row?.age}</StyledTableCell>
                                        <StyledTableCell align="right">{row?.email}</StyledTableCell>
                                        <StyledTableCell align="right">{row?.username}</StyledTableCell>
                                        <StyledTableCell align="right">{row?.type}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

            </div>

        </React.Fragment>
            

    )
}

export default TestingReport2
