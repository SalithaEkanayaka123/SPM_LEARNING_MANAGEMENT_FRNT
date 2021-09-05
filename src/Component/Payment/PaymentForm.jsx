import React, {useState} from "react";
import ReactModal from 'react-modal';
import './PaymentForm.css'
import classImage from './5 9.svg'
import Paypal from './paypal.svg'
import Amex from './amex.svg'
import Visa from './visa.svg'
import {addPayment} from "../../Action/Payment";
import {useDispatch} from "react-redux";


function PaymentForm({row}) {

    const [show, setShow] = useState(false);

    const [courseid, setCourseid] = useState(row.CID);
    const [date, setDate] = useState(new Date());
    const [amount, setAmount] = useState(row.Amount);
    const [description, setDescription] = useState('course enrollment');
    const [doneby, setDoneby] = useState('STU001');
    const [type, setType] = useState('income');
    const dispatch = useDispatch();


    function SubmitPaymentRecord () {
        const newPayment ={
            amount,
            courseid,
            date,
            description,
            doneby,
            type
        }
        console.log(newPayment);
        dispatch(addPayment(newPayment));
    }


    const handleModal = () =>{ setShow(!show)}
    return(
        <div>
            <button className='payment-enroll-btn' onClick={() => handleModal()}>Buy</button>
            <ReactModal
                isOpen={show}
                contentLabel="Minimal Modal Example"
                className="Modal"
                overlayClassName="Overlay"
                onRequestClose={handleModal}
            >

                <div className='MainModalContainer'>
                    <div className='MainModalSideContainer'>
                        <div className='MainClassContainer'>
                            <img className='MainImage' src={classImage}/>
                            <div className='Textcontainer'>
                                <div className='heading-text'>{row.CName}</div>
                                <div className='sub-text'>{row.Teacher}</div>
                                <div className='sub-text'>{row.Description}</div>
                            </div>
                        </div>
                        <div className='MainMethodContainer'>
                            <div className='Main-heading'>Checkout</div>
                            <hr></hr>
                            <div className='value-container'>
                                <div className='Sub-heading'>Amount :</div>
                                <div className='Sub-heading'>{row.Amount}</div>
                            </div>
                            <div className='value-container'>
                                <div className='Sub-heading'>Discount :</div>
                                <div className='Sub-heading'>{row.Amount}</div>
                            </div>
                            <hr></hr>
                            <div className='value-container'>
                                <div className='Sub-heading'>Total Amount :</div>
                                <div className='Sub-heading'>{row.Amount}</div>
                            </div>

                            <hr/><hr/>
                            <div className='payment-input-button-container'>
                                <button className='input-button'>Pay Now</button>
                                <div className='Sub-heading gray-text'>or Pay with</div>
                                <button className='paypal-button' onClick={handleModal}>
                                    <img src={Paypal}/>
                                </button>
                                <button className='my-card-button' onClick={handleModal}>My Card</button>

                            </div>

                        </div>
                    </div>
                    <div className='PaymentContainer'>
                        <div className='main-payament-from-header'>
                            <h3 className='PaymentContainerHeader'>Payment</h3>
                            <div className='image-container'>
                                <img src={Amex}/>
                                <img src={Visa}/>
                            </div>

                        </div>

                            <div className='input-field-container'>
                                <input className='input-field' type='text' placeholder='Card Number' />
                                <div className='PaymentSubContainer'>
                                    <input className='input-field' type='text' placeholder='CVC' />
                                    <input className='input-field' type='month' placeholder='Exdate'/>
                                </div>
                                <input className='input-field' type='text' placeholder='Name on Card' />
                                <input className='input-field' type='email' placeholder='Email Address' />
                            </div>
                            <div className='input-button-container'>
                                <button className='input-button' type="submit" onClick={SubmitPaymentRecord}>Pay Now</button>
                                <button className='input-button' onClick={handleModal}>Cancel</button>
                            </div>


                    </div>
                </div>


            </ReactModal>
        </div>
    )
}
export default PaymentForm;