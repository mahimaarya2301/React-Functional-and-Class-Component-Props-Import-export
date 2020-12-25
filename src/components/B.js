//Import Area
import React from 'react';
import { C } from './C';

//Create a Functional Component
export function B(props){ //Named export
    return <span className="B">Hello {props.myname} <C x="Pooja" y="Palak"/></span>
   
} 