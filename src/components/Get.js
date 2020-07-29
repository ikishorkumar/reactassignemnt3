import React from 'react'
import './imagecomponent.css';
const Showtrue= () => <div className="showtrue">Get Value is True</div>;
const Hiddentrue = () => <div className="hiddentrue"></div>;

const Get = ({ isOpen }) => <div>{isOpen === true ?  <Showtrue/> : <Hiddentrue/>}</div>;

export default Get;