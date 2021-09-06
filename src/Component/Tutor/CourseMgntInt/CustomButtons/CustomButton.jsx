import React from 'react'
import "./CustomButton.css"

function CustomButton({name, color, revokeMethod}) {
    const buttonStyle = {backgroundColor: color};
    return (
        <div className="custom-button-container">
            <button onClick={()=>revokeMethod()} style={buttonStyle} className="custom-button">{name}</button>
        </div>
    )
}
export default CustomButton
