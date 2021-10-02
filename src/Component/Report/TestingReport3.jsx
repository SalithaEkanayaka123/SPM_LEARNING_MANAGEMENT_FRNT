import React, {useEffect, useState} from 'react'
import ChartSeries from "@progress/kendo-react-charts/dist/es/components/Series";
import ChartSeriesItem from "@progress/kendo-react-charts/dist/es/components/SeriesItem";
import ChartSeriesLabels from "@progress/kendo-react-charts/dist/es/components/series-item/Labels";
import ChartLegend from "@progress/kendo-react-charts/dist/es/components/Legend";
import {Chart} from "@progress/kendo-react-charts";
import './TestingReport.scss'
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser, getTeacherStatusCount, getUserCount} from "../../Action/Users";
import axios from "axios";
import * as api from "../../API";


const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        //padding: "auto",
    },
    container1: {
        padding: "auto",
    },
    container2: {
        //marginBottom: "30px",

    },
    container3: {
        //marginBottom: "30px",
        minWidth: 'fit-content',
        height: 'fit-content'
    },
    container4: {
        minWidth: '230px',
        height: '230px'
    },
    paper: {
        height: "200px",
        minWidth: "fit-content",
        justifyContent: "left",
        elevation: 8
    },
    paper1: {
        // height: "100px",
        // paddingTop: "20px",
        // marginTop: "-200px",
        // minWidth: "270px",
        // alignItems: "center",
        paddingLeft: "10px",
        paddingRight: "10px",
        minWidth: "fit-content",

        //elevation: 8
    },
    paper2: {
        //elevation: 8
        paddingLeft: "10px",
        paddingRight: "10px",
        minWidth: "fit-content",
    },
    dataFont : {
        fontSize: "15px",
        justifyItems:"left"
    },
    chart1 : {
        // marginRight: "100px",
        // marginTop: "-100px"
    },
    chart2 : {
        marginTop: "-100px"
    }
}))

const TestingReport3 = () => {

    const dispatch = useDispatch();
    const classes = useStyles();
    const [response3, setResponse3] = useState([]);
    const response = useSelector((state) => state.userDetails1?.usercount?.data);
    console.log('ww ',response);




    const fetchEventDetails = async () => {
        const response2 = await axios.get(api.baseURL + 'teachercount/')
        setResponse3(response2?.data)
        console.log(response2?.data)
    }

    useEffect(() => {
        fetchEventDetails();
    }, [])
    useEffect(() => {
        //setPage(0);
        console.log('calling')
        dispatch(getTeacherStatusCount());
    },[])

    useEffect(() => {
        //setPage(0);
        console.log('calling')
        dispatch(getUserCount());
    },[])


    console.log(response3)

    // const donutCenterRenderer = () => (
    //     <span>
    //          <h3>22.5%</h3> of which renewables
    //     </span>
    // );

    const labelContent = (e) => e.category;

    const data = [
        {
        "kind": "Teachers", "share": response?.at(0) / response?.at(2)
        },
        {
            "kind": "Students", "share": response?.at(1) / response?.at(2)
        },
        {
            "kind": "Admins", "share": (response?.at(2) - (response?.at(1) + response?.at(0)) )/ response?.at(2)
        }
    ]

    const data1 = [
        {
            "kind": "valid: ", "share":  response3?.at(0) / (response3?.at(0) + response3?.at(1) + response3?.at(2))
        },
        {
            "kind": "invalid ", "share": response3?.at(1) / (response3?.at(0) + response3?.at(1) + response3?.at(2))
        },
        {
            "kind": "pending", "share": response3?.at(2) / (response3?.at(0) + response3?.at(1) + response3?.at(2))
        }
    ]
    return (
        <div>

                <div className="chart1">
                    <div className="chart2 col">
                        <Chart  className={classes.container4}>
                            <ChartSeries>
                                <ChartSeriesItem
                                    type="donut"
                                    data={data}
                                    categoryField="kind"

                                    field="share"
                                >
                                    <ChartSeriesLabels
                                        color="#fff"
                                        background="none"

                                        content={labelContent}
                                    />
                                </ChartSeriesItem>
                            </ChartSeries>
                            <ChartLegend visible={false} />
                        </Chart>
                    </div>
                    <div className="chart3">
                        <Chart className={classes.container4}>
                            <ChartSeries>
                                <ChartSeriesItem
                                    type="donut"
                                    data={data1}

                                    categoryField="kind"
                                    field="share"
                                >
                                    <ChartSeriesLabels
                                        color="#fff"
                                        background="none"

                                        content={labelContent}
                                    />
                                </ChartSeriesItem>
                            </ChartSeries>
                            <ChartLegend visible={false} />
                        </Chart>
                    </div>

                </div>
            <div className="chart5">
                <div className="chart2 ">
                    <div className={classes.paper1}>
                            <div className={classes.dataFont}><b>Total User Analysis </b></div>
                            <div className={classes.dataFont}>Total Users :{response?.at(2)} </div>
                            <div className={classes.dataFont}>Total Teachers : {response?.at(0)} ({((response?.at(0) / response?.at(2)) * 100).toFixed(2)})%</div>
                            <div className={classes.dataFont}>Total Students : {response?.at(1)} ({((response?.at(1) / response?.at(2)) * 100).toFixed(2)})%</div>
                            <div className={classes.dataFont}>Total Admins : {(response?.at(2) - (response?.at(1) + response?.at(0)) )} ({(((response?.at(2) - (response?.at(1) + response?.at(0)) ) / response?.at(2)) * 100).toFixed(2)})%</div>
                    </div>
                </div>
                <div className="chart4">
                        <div className={classes.paper2}>
                                <div className={classes.dataFont}><b>Total Teachers Analysis </b></div>
                                <div className={classes.dataFont}>Total Teachers : {response3?.at(0) + response3?.at(1) + response3?.at(2) } </div>
                                <div className={classes.dataFont}>Total Valid Teachers : {response3?.at(0)} ({(response3?.at(0) / (response3?.at(0) + response3?.at(1) + response3?.at(2))) * 100 }%)</div>
                                <div className={classes.dataFont}>Total Invalid Teachers : {response3?.at(1)} ({(response3?.at(1) / (response3?.at(0) + response3?.at(1) + response3?.at(2))) * 100 }%)</div>
                                <div className={classes.dataFont}>Total Pending Teachers : {response3?.at(2)} ({(response3?.at(2) / (response3?.at(0) + response3?.at(1) + response3?.at(2))) * 100 }%)</div>
                        </div>
                </div>

            </div>



            {/*<div className={classes.container}>*/}
            {/*    <Grid container className={classes.container1} direction="column" alignItems="center">*/}
            {/*        <Grid container className={classes.container2} direction="row"spacing={16} alignItems="center">*/}
            {/*            <Grid item lg={4} className={classes.chart1}>*/}

            {/*                <Chart >*/}
            {/*                    <ChartSeries>*/}
            {/*                        <ChartSeriesItem*/}
            {/*                            type="donut"*/}
            {/*                            data={data}*/}
            {/*                            categoryField="kind"*/}

            {/*                            field="share"*/}
            {/*                        >*/}
            {/*                            <ChartSeriesLabels*/}
            {/*                                color="#fff"*/}
            {/*                                background="none"*/}

            {/*                                content={labelContent}*/}
            {/*                            />*/}
            {/*                        </ChartSeriesItem>*/}
            {/*                    </ChartSeries>*/}
            {/*                    <ChartLegend visible={false} />*/}
            {/*                </Chart>*/}

            {/*            </Grid>*/}
            {/*            <Grid item lg={4}>*/}



            {/*            </Grid>*/}


            {/*        </Grid>*/}
            {/*        <Grid container className={classes.container3} direction="row"spacing={16} alignItems="center">*/}
            {/*            <Grid item xs={12} sm={6} md={4} lg={4}>*/}

            {/*            </Grid>*/}
            {/*            <Grid item xs={12} sm={6} md={4} lg={4}>*/}

            {/*            </Grid>*/}
            {/*        </Grid>*/}

            {/*    </Grid>*/}

            {/*</div>*/}

            

        </div>
    )
}

export default TestingReport3
