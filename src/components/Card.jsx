import React from 'react'
import { Link } from 'react-router-dom'

function Card(props){
    const addr="desc/"+props.id
    return(
    <Link to={addr}>
    <div className="bg-white flex h-24 py-2 justify-between">
        <img alt={props.alt} src={props.src} />
        <p className="my-auto mr-6">{props.alt}</p>
    </div>
    </Link>
    )
}

export default Card