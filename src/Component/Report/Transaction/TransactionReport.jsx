import './styles.scss'
import "./PrintableComponent.scss"
import React from "react";
import Logo from "./Logo.png";
import responce from "./TransactionData.json";
import TransactionMaterialTable from "./TransactionMaterialTable/TransactionMaterialTable";
class TransactionReport extends React.Component {
    render() {
        return (
            <div className="app-content">
                <div className="page-container hidden-on-narrow">
                    <div className={'pdf-page size-a4'} id="container">
                        <div className="inner-page">
                            <div className="pdf-header">
								<span className="company-logo">
									<img className="company-image" src={Logo} alt="Kendoka Company Logo"/> Payment report
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
                                    <h3>File Overview</h3>
                                    <p>
                                        This report shows the file distribution in each course.
                                    </p>
                                </div>

                                <div className="from">
                                    <h6>Tutor Department</h6>
                                    <p>
                                        Resource Management.
                                    </p>
                                    <p>
                                        Report ID: 23543<br/>
                                        Invoice Date: 12.03.2014<br/>
                                        Due Date: 27.03.2014
                                    </p>
                                </div>
                            </div>
                            <div className="pdf-chart">
                            {/*    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                            {/*    <table className='Trasaction-table-container'>*/}
                            {/*        <tr className='Trasaction-table-header'>*/}
                            {/*            <th className='table-head-row-col'>Transaction ID</th>*/}
                            {/*            <th className='table-head-row-col'>Date</th>*/}
                            {/*            <th className='table-head-row-col'>Amount</th>*/}
                            {/*            <th className='table-head-row-col'>Description</th>*/}
                            {/*            <th className='table-head-row-col'>Done By</th>*/}
                            {/*            <th className='table-head-row-col'>Type</th>*/}
                            {/*            <th className='table-head-row-col'>Course ID</th>*/}
                            {/*        </tr>*/}
                            {/*        {responce.map((row,index) => (*/}
                            {/*            <tr  className={ row.type == 'income' ? 'Trasaction-table-data-income' :'Trasaction-table-data'} key={index}>*/}
                            {/*                <td className='table-data-row-col'>{row.tid}</td>*/}
                            {/*                <td className='table-data-row-col'>{row.date}</td>*/}
                            {/*                <td className='table-data-row-col'>{row.amount}</td>*/}
                            {/*                <td className='table-data-row-col'>{row.description}</td>*/}
                            {/*                <td className='table-data-row-col'>{row.doneby}</td>*/}
                            {/*                <td className='table-data-row-col'>{row.type}</td>*/}
                            {/*                <td className='table-data-row-col'>{row.courseid}</td>*/}
                            {/*            </tr>*/}

                            {/*        ))}*/}
                            {/*    </table>*/}
                                {/*    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                               <TransactionMaterialTable array={responce}/>

                            </div>
                            <div className="pdf-body">
                                <div className="custom-grid" id="grid">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TransactionReport;
