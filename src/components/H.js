//Import Area
import React from 'react';
import I from './I';//Default import
import './i.css';

//Create a Functional Component
 let H = (props)=>{ 
    return <sub className="h">Hello {props.name}<I my="Kuldeep"/></sub>
} 
export default H;