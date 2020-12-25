//Import Area
import React from 'react';
import { G } from './G';//Named import
import './g.css';

//Create a Functional Component
export function F(props){ //Named export
    return <sub className="f">Hello {props.name}<G my="Shweta"/></sub>
   
} 
