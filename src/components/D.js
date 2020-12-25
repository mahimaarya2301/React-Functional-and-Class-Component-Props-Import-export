//Import Area
import React from 'react';
import E from './E';
import './e.css';

//Create a Functional Component
function D(props){ 
    return <span className="d">Hello {props.myname}<E m="Mohit"/></span>
   
} 
export default D;