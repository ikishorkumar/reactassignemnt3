import React from 'react';
import './imagecomponent.css';
function Imagecomponent({src}) {
  
      
    return(
        <div className="imagebox">
        <h6>Plain Function is used to create this</h6>
        <img  src= {src} alt="It's Kishor Kumar"/>
    </div>
    );
      
}
export default Imagecomponent;
