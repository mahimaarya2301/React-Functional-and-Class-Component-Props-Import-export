//Import Area
import React from 'react';
import Y from './Y';
import './y.css';

//Create a Functional Component
function X(props){ 
    return <span className="x">Hello {props.myname}<Y m="Aditi"/></span>
   
} 
export default X;