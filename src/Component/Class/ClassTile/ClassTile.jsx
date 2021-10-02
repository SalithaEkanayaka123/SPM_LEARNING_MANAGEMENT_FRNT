import React from 'react';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import './ClassFileStyles.css'
import {useHistory} from "react-router";
import {Card, CardMedia} from "@material-ui/core";
const ClassTile = (props) => {
    console.log('ROWS',props?.rows?.fullPath);
    const history = useHistory();

    const passData = () => {
        history.push('/singleclassview', { data: props?.rows })
    }
    // console.log(props.row.fullPath);
    return(
        <div className='class-tile-container' onClick={passData}>
            <div className='left-container'>
                <div className='main-heading'>{props?.rows?.name}</div>
                <div className='sub-heading'> {props?.rows?.description}</div>
            </div>
            <div className='right-container'>
                <Card>
                    <CardMedia image="D:\sliit\3rd Year\2nd sem\SPM\Assignment\SPM_LEARNING_MANAGEMENT_BACK_New\img\img_2.jpg">

                    </CardMedia>
                </Card>
                {/*<img />*/}
            </div>

        </div>
      )
}

export default ClassTile;
