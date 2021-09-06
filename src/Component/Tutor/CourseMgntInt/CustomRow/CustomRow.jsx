import React from 'react'
import "./CustomRow.css"
import CustomButton from "../CustomButtons/CustomButton";
function CustomRow({id, header, description, body, deleteMethod}) {

    //Delete the Item When click on the button.
    const invokingDelete = () => {
        console.log("Delete method");
        deleteMethod(id);
    }
    const invokingRevoke = () => {
        console.log("Revoke method");
    }
    const invokingPublish = () => {
        console.log("Publish method");
    }

    return (
        <div className="custom-row-component">
            <div className="custom-row-component-second-column">
                <div className="custom-row-component-first-column">
                    <div className="custom-row-component-header">
                        {header}
                    </div>
                    <div className="custom-row-component-description">
                        {description}
                    </div>
                </div>
                <div className="custom-row-component-second-description">
                    {body}
                </div>
            </div>
            <div className="custom-row-component-three-column">
                {/*Custom Button Stack*/}
                <div className="custom-row-button-group">
                    <CustomButton name={"Delete"} color={"#FF5050"} revokeMethod={invokingDelete}/>
                    <CustomButton name={"Revoke"} color={"#E4BF5E"} revokeMethod={invokingRevoke}/>
                    <CustomButton name={"Publish"} color={"#50C972"} revokeMethod={invokingPublish}/>
                </div>
            </div>
        </div>
    )
}

export default CustomRow
