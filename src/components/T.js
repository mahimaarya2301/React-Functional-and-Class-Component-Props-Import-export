//Import Area
import React from 'react';
import U from './U';
import './u.css';

//Create a Functional Component
function T(props){ 
    return <span className="t">Hello {props.myname}<U m="Monu"/></span>
   
} 
export default T;