//Import Area
import React from 'react';
import { S } from './S';

//Create a Functional Component
export function R(props){ //Named export
    return <span className="r">Hello {props.myname} <S x="Sonakshi" y="Susan"/></span>
   
} 