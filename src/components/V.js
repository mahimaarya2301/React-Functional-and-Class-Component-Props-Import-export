//Import Area
import React from 'react';
import { W } from './W';

//Create a Functional Component
export function V(props){ //Named export
    return <span className="v">Hello {props.myname} <W x="Rudra" y="Saransh"/></span>
   
} 