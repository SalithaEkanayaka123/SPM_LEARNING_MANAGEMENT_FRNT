import React, {useState} from "react";
import ReactModal from 'react-modal';
import './styles.css'

function PopupModel({ show,children, buttondisble}) {

    const [show1, setShow] = useState(false);

    const handleModal = () =>{ setShow(!show)}
    return(
        <div>
            {
                buttondisble && <button onClick={() => handleModal()}>Trigger Modal</button>
            }

            <ReactModal
                isOpen={show}
                className="popup-modal"
                overlayClassName="modal-verlay"
                onRequestClose={handleModal}
            >
                <div className='modal-main'>
                    {children}
                </div>
            </ReactModal>
        </div>
    )
}
export default PopupModel;