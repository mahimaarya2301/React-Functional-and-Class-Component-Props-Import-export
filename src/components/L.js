//Import Area
import React from 'react';
import M from './M';
import './m.css';

//Create a Functional Component
const L = (props)=>{ 
    return <span className="l">Hello {props.name}<M x="Nikhar"/></span>
   
} 
export default L;