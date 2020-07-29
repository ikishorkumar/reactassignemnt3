import React from 'react';
import './imagecomponent.css'
function Mediacard({title,body,imageurl}) {
    return(
        <div className= "mediacard">
            <h2>{title}</h2>
        <p>{body}</p>
        <img id="mediaImage" src={imageurl} alt="Its Media Card"/>
        </div>
    );
    
}
export default Mediacard;

