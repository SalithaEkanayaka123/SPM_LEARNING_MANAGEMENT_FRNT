// import './AdminPrintableComponent.css'
import React from "react";
import Logo from "../../TutorReportPage/companyLogo/Logo.png";
import {Chart, ChartSeries, ChartSeriesItem, ChartSeriesLabels} from "@progress/kendo-react-charts";
import axios from "axios";
class AnnouncementPrintableComponent extends React.Component {

    state = {
        graphData: []
    }

    // Async method to return the data.
    // Plug the data to the chart.
    async componentDidMount() {
        await axios.get(`http://localhost:8073/api/anncountbyclass`)
            .then(res => {
                const graphData = res.data;
                this.setState({graphData});
            })
        console.log("ANNN",this.state.graphData); // Testing.
    }



    render() {
        return (
            <div className="admin-app-content">
                <div className="admin-page-container hidden-on-narrow">
                    <div className={'pdf-page size-a4'} id="container">
                        <div className="admin-inner-page">
                            <div className="admin-pdf-header">
								<span className="admin-company-logo">
									<img className="admin-company-image" src={Logo} alt="Kendoka Company Logo"/>Announcement Details Report
								</span>
                            </div>
                            <div className="admin-pdf-footer">
                                <p>
                                    SPM Management System.<br/>
                                    Learning Management Automation System.<br/>
                                    Colombo, Sri Lanka, 108080.
                                </p>
                                <p className="admin-signature">
                                    Signature: ________________ <br/><br/>
                                    Date: 12.03.2014
                                </p>
                            </div>
                            <div className="admin-addresses">
                                <div className="admin-for">
                                    <h3>File Overview</h3>
                                    <p>
                                        This report shows the announcement count in each class.
                                    </p>
                                </div>

                                <div className="admin-from">
                                    <h6>Admin Department</h6>
                                    <p>
                                        Class Management.
                                    </p>
                                    <p>
                                        Report ID: 23543<br/>
                                        Invoice Date: 12.03.2014<br/>
                                        Due Date: 27.03.2014
                                    </p>
                                </div>
                            </div>
                            <div className="admin-pdf-chart">
                                <Chart style={{ height: 280 }}>
                                    <ChartSeries>
                                        <ChartSeriesItem
                                            type="donut"
                                            data={this.state.graphData}
                                            categoryField="className"
                                            field="count"
                                        >
                                            <ChartSeriesLabels
                                                color="#fff"
                                                background="none"
                                            />
                                        </ChartSeriesItem>
                                    </ChartSeries>
                                </Chart>
                            </div>
                            <div className="admin-pdf-body">
                                <div className="admin-custom-grid" id="grid">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AnnouncementPrintableComponent;