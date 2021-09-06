import React from 'react'
import "./TileStyles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Tile1({name, price, image}) {
    return (
        <div className="tutor-header-card">
            <p className="tutor-card-header">{name}</p>
            <p className="tutor-card-price">{price}</p>
            <FontAwesomeIcon color="#3e3b9d" size="3x" icon={image} />
        </div>
    )
}
export default Tile1
