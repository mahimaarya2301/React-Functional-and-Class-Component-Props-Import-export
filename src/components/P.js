//Import Area
import React from 'react';
import  Q from './Q';
import './q.css';

//Create a Functional Component
var P = (props)=>{
    return <h1 className="p">Hello {props.myname}<Q myname="Kavya"/></h1>
}
export default P;