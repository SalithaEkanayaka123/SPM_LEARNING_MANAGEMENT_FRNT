import React from 'react';
import './styles.scss'

const CourseTile = ({image}) => {
    return(
        <div className='course-tile-container'>
            <div className='top-container'>
                <div className='main-heading'>Class Name</div>
                <div className='sub-heading'> Class Description</div>
            </div>
            <div className='image-container'>
                <img src={image}/>
            </div>
        </div>
    )
}
export default CourseTile;
