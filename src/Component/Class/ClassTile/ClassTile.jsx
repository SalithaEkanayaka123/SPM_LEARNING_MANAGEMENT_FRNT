import React from 'react';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import Classimage from './Images/Classimage.svg'
import './ClassFileStyles.css'
const ClassTile = () => {

    return(
        <div className='class-tile-container'>
            <div className='left-container'>
                <div className='main-heading'>Class Name</div>
                <div className='sub-heading'> Class Description</div>
            </div>
            <div className='right-container'>
                <img src={Classimage}/>
            </div>

        </div>
      )
}

export default ClassTile;