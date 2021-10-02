import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getallTransactions} from "../../../Action/Payment";
import PaymentForm from "../../Payment/PaymentForm";
import './styles.css'
import {Link} from "react-router-dom";
import Button from "@progress/kendo-react-buttons/dist/es/Button";

function AllTransations ({response}) {

    const dispatch = useDispatch();

    let data = useSelector((state) => state.paymentDetails.paymentDetails.records);


    const [transactionData, setTransactionData] = useState(response);
    const [searchTerm, setSearchTerm] = useState("");
    console.log('transactionData ',transactionData)

    useEffect(() => {
        dispatch(getallTransactions());
        setTransactionData({...transactionData, data})
    },[])

    return(
        <div className="AllTransations-continer">
            <div className='Trasaction-view-container'>
                <div className='Trasaction-view-wrapper'>
                    <div className='Trasaction-header'>Transactions
                        <div className='Trasaction-sub-header'>Course Transaction History</div>
                    </div>
                    <div className='search-form'>
                        <input className='input-field'
                               type='text'
                               placeholder='Search Trasaction...'
                               value={searchTerm}
                               onChange={(e) => setSearchTerm(e.target.value)}/>
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
                    {response?.filter((val) => {
                        console.log('val  ',val)
                        if(searchTerm == ""){

                            return val;
                        }else if(val?.amount?.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val;
                        }else if(val?.description?.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val;
                        }
                    })?.map((row,index) => (
                        <tr  className={ row.type == 'income' ? 'Trasaction-table-data-income' :'Trasaction-table-data'} key={index}>
                            <td className='table-data-row-col'>{row.tid}</td>
                            <td className='table-data-row-col'>{row.date}</td>
                            <td className='table-data-row-col'>{row.amount}</td>
                            <td className='table-data-row-col'>{row.description}</td>
                            <td className='table-data-row-col'>{row.doneby}</td>
                            <td className='table-data-row-col'>{row.type}</td>
                            <td className='table-data-row-col'>{row.courseid}</td>
                        </tr>
                    )) }

                    {/*{response?.map((row,index) => (*/}
                    {/*    <tr  className={ row.type == 'income' ? 'Trasaction-table-data-income' :'Trasaction-table-data'} key={index}>*/}
                    {/*        <td className='table-data-row-col'>{row.tid}</td>*/}
                    {/*        <td className='table-data-row-col'>{row.date}</td>*/}
                    {/*        <td className='table-data-row-col'>{row.amount}</td>*/}
                    {/*        <td className='table-data-row-col'>{row.description}</td>*/}
                    {/*        <td className='table-data-row-col'>{row.doneby}</td>*/}
                    {/*        <td className='table-data-row-col'>{row.type}</td>*/}
                    {/*        <td className='table-data-row-col'>{row.courseid}</td>*/}
                    {/*    </tr>*/}

                    {/*))}*/}
                </table>
                <div>
                    <div className="button-item">
                        <Link to={{
                            pathname: '/report',
                            age: {type: "admin2"}
                        }}><Button primary={true}>Generate Report</Button></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default AllTransations;
