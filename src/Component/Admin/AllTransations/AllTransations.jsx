import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getallTransactions} from "../../../Action/Payment";
import PaymentForm from "../../Payment/PaymentForm";
import './styles.css'
import {Link} from "react-router-dom";
import Button from "@progress/kendo-react-buttons/dist/es/Button";

function AllTransations () {

    const dispatch = useDispatch();
    let response = useSelector((state) => state.paymentDetails.paymentDetails.records);

    useEffect(() => {
        dispatch(getallTransactions());
    },[])

    response = [
        {"tid":"T001", "date":"2021/10/1","amount":10000.00, "description":"Course payment", "doneby":"STU001", "type":"income","courseid":"C001" },
        {"tid":"T002", "date":"2021/10/1","amount":500.00, "description":"material pay", "doneby":"STU002", "type":"income","courseid":"C001" },
        {"tid":"T003", "date":"2021/10/1","amount":1500000.00, "description":"Teacher salary", "doneby":"AD001", "type":"expence","courseid":"C001" },
        {"tid":"T004", "date":"2021/10/1","amount":10000.00, "description":"Course payment", "doneby":"STU002", "type":"income","courseid":"C001" },
        {"tid":"T005", "date":"2021/10/1","amount":10000.00, "description":"Course payment", "doneby":"STU003", "type":"income","courseid":"C001" },
        {"tid":"T006", "date":"2021/10/1","amount":500.00, "description":"material pay", "doneby":"STU002", "type":"income","courseid":"C001" },
        {"tid":"T007", "date":"2021/10/1","amount":1500000.00, "description":"Teacher salary", "doneby":"AD001", "type":"expence","courseid":"C002" }
    ]

    return(
        <div className="AllTransations-continer">
            <div className='Trasaction-view-container'>
                <div className='Trasaction-view-wrapper'>
                    <div className='Trasaction-header'>Transactions
                        <div className='Trasaction-sub-header'>Course Transaction History</div>
                    </div>
                    <div className='search-form'>
                        <input className='input-field' type='text' placeholder='Search Trasaction...'/>
                    </div>
                </div>
                <table className='Trasaction-table-container'>
                    <tr className='Trasaction-table-header'>
                        <th className='table-head-row-col'>Transaction ID</th>
                        <th className='table-head-row-col'>Date</th>
                        <th className='table-head-row-col'>Amount</th>
                        <th className='table-head-row-col'>Description</th>
                        <th className='table-head-row-col'>Done By</th>
                        <th className='table-head-row-col'>Type</th>
                        <th className='table-head-row-col'>Course ID</th>
                    </tr>
                    {response?.map((row,index) => (
                        <tr  className={ row.type == 'income' ? 'Trasaction-table-data-income' :'Trasaction-table-data'} key={index}>
                            <td className='table-data-row-col'>{row.tid}</td>
                            <td className='table-data-row-col'>{row.date}</td>
                            <td className='table-data-row-col'>{row.amount}</td>
                            <td className='table-data-row-col'>{row.description}</td>
                            <td className='table-data-row-col'>{row.doneby}</td>
                            <td className='table-data-row-col'>{row.type}</td>
                            <td className='table-data-row-col'>{row.courseid}</td>
                        </tr>

                    ))}
                </table>
                <div>
                    <div className="button-item">
                        <Link to={{
                            pathname: '/report',
                            age: {type: "tutor3"}
                        }}><Button primary={true}>Generate Report</Button></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default AllTransations;