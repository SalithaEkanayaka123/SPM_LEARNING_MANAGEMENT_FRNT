import React from 'react'
import "./InqFeedInt.css"
import Feedback from "./Feedback/Feedback";
import Announcement from "./Announcement/Announcement";
import Inquiry from "./Inquiry/Inquiry";
import Grid from "@material-ui/core/Grid";

/**
 * Get this two arrays into the tutor dashboard page.
 * **/


function InqFeedInt({array1, array2, setTrigger, setTriggerData, triggerData}) {

    return (
        <div className="inqfeedint-responsive-layout">
            <Grid container>
            <div className="responsive-subcomponent1">
                <Feedback array={array1}/>
            </div>
            <div className="responsive-subcomponent2">
                <Announcement/>
            </div>
            <div className="responsive-subcomponent3">
                <Inquiry array={array2}
                         setTrigger={setTrigger}
                         setTriggerData={setTriggerData}
                         triggerData={triggerData}/>
            </div>
            </Grid>
        </div>
    )
}
export default InqFeedInt
