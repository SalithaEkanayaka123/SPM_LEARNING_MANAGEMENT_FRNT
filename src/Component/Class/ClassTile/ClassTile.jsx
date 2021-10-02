import React from 'react';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import './ClassFileStyles.css'
import {useHistory} from "react-router";
import {Card, CardMedia, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    valuew : {
        height: "200px"
    }
});
const ClassTile = (props) => {

    console.log('ROWS',props?.rows?.image);
    const history = useHistory();
    const classes = useStyles();

    const passData = () => {
        history.push('/singleclassview', { data: props?.rows })
    }

    //const onMediaFallback = event => event.target.src = FALLBACK_IMAGE;
    // console.log(props.row.fullPath);
    return(
        <div className='class-tile-container' onClick={passData}>
            <div className='left-container'>
                <div className='main-heading'>{props?.rows?.name}</div>
                <div className='sub-heading'> {props?.rows?.description}</div>
            </div>
            <div className='right-container'>
                <Card>
                    <CardMedia
                        component="img"
                        //C:\sliit\3rd Year\2nd Semester\SPM\New folder\download.jpg
                        //`https://localhost:8073/...../${props}`
                        style={{height: 300, width: 200, paddingTop: '56.25%', marginTop:'30'}}
                        image ={`http://localhost:8073/api/download/image/${props?.rows?.image}`}
                     >


                    </CardMedia>
                </Card>
                {/*<img />*/}
            </div>

        </div>
      )
}

export default ClassTile;
