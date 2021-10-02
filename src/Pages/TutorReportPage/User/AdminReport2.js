import React, { Component } from 'react'
import Logo from "../companyLogo/Logo.png";
import TestingReport3 from "../../../Component/Report/TestingReport3";
import TestingReport2 from "../../../Component/Report/TestingReport2";

export class AdminReport2 extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div className="app-content">
                <div className="page-container hidden-on-narrow">
                    <div className={'pdf-page size-a4'} id="container">
                        <div className="inner-page">
                            <div className="pdf-header">
								<span className="company-logo">
									<img className="company-image" src={Logo} alt="Kendoka Company Logo"/> User Tracking Report
								</span>
                            </div>
                            <div className="pdf-footer">
                                <p>
                                    SPM Management System.<br/>
                                    Learning Management Automation System.<br/>
                                    Colombo, Sri Lanka, 108080.
                                </p>
                                <p className="signature">
                                    Signature: ________________ <br/><br/>
                                    Date: 12.03.2014
                                </p>
                            </div>
                            <div className="addresses">
                                <div className="for">
                                    <h3>User Overview - Admin</h3>
                                    <p>
                                        This report shows the over view of user with user count and valid status of teacher count
                                    </p>
                                </div>

                                <div className="from">
                                    <h6>Admin Department</h6>
                                    <p>
                                        User Management.
                                    </p>
                                    <p>
                                        Report ID: 23544<br/>
                                        Invoice Date: 12.03.2014<br/>
                                        Due Date: 27.03.2014
                                    </p>
                                </div>
                            </div>
                            <div className="pdf-chart">
                                <TestingReport3/>
                            </div>
                            {/*<div className="pdf-body">*/}
                            {/*    <div className="custom-grid" id="grid">*/}
                            {/*        <div> Content Comes Here! </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminReport2
