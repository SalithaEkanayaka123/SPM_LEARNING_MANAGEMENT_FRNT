import React, {useState} from 'react'
import AnnouncementSection from "../AnnouncementSection/AnnouncementSection";
import AdminDashHeader from "../Header/AdminDashHeader";
import {TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@progress/kendo-react-buttons/dist/es/Button";
import {useHistory} from "react-router";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '60ch',

        }
    },
    paymentType: {
        width: '60ch',
        height: '4vw',
        background: 'white',
        borderRadius: '30px',


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
        padding: "30px",
        background: "#0D1335",
        height: "20vw",
        marginBottom: '10px',
        borderRadius: "30px"
    },
    title1: {
        color:'#FFFFFF',
        fontSize: '25px',
    },
    title2: {
        color:'#C4C4C4',
        fontSize: '25px',
    },

}))
function UserReports() {

    const [age, setAge] = useState("")
    const [age1, setAge1] = useState("")
    const classes = useStyles();
    const history = useHistory();

    const handleChange = () => {
        console.log(age)
        console.log(age1)
        ///report
        //, { data: props?.rows }
        history.push('/report', { age: age, age1: age1 });

    }

    return (
        <div style={{background: "#525252", borderRadius: "30px", padding: "20px"}} >
            <center>
                <h1 className={classes.title2}>User Management Reports</h1><br/>
            </center>
            <Grid container  direction="row" alignItems="center" spacing={8}>
                <Grid item style={{width: "50%"}}>
                        <Grid className={classes.stage3} container direction="column" spacing={2} alignItems="center">
                            <h1 className={classes.title2}>Age Gap Report</h1>
                            <Grid item>
                                    <TextField type="number" value={age} onChange={(e) => setAge(e.target.value)} className={classes.paymentType} id="outlined-basic" label="Starting Age" variant="filled" />
                            </Grid>
                            <Grid item>
                                    <TextField type="number" value={age1} onChange={(e) => setAge1(e.target.value)}  className={classes.paymentType} id="outlined-basic" label="Ending Age" variant="filled" />
                            </Grid>
                            <Grid item>
                                    <Link to={{
                                        pathname: '/report',
                                        age: {age: age, age1: age1, type: "admin"}
                                    }}>
                                        <Button
                                            style={{ width: '60ch', borderRadius:"30px", backgroundColor: '#9F54FF',  color: 'white'}}
                                            variant="contained"
                                            size="large"
                                        >generate </Button>
                                    </Link>

                            </Grid>
                        </Grid>


                </Grid>
                <Grid item style={{width: "50%"}}>
                    <Grid className={classes.stage3} container direction="column" spacing={2} alignItems="center">
                        <h1 className={classes.title2}>User Tracking Report</h1>
                        <Grid item>
                            <Link to={{
                                pathname: '/report',
                                age: {type: "admin1"}
                            }}>
                                <Button
                                    style={{ height: '60px',width: '80ch' , borderRadius:"30px", backgroundColor: '#9F54FF', marginTop: '50px', color: 'white'}}
                                    variant="contained"
                                    size="large"
                                >generate </Button>
                            </Link>
                        </Grid>
                    </Grid>
                    {/*<Grid container style={{background: "#000000", width: "100%",height: "100%", paddingLeft: "30px"}}>*/}
                    {/*    <Grid className={classes.stage3} container direction="row" alignItems="left" spacing={8}>*/}
                    {/*        */}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}

                </Grid>
            </Grid>







        </div>
    )
}

export default UserReports
