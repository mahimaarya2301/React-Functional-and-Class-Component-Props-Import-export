//Import Area
import React,{Component} from 'react';
import L from './L';//Defaultimport
import './l.css';

//Let's create a class component
//Component Declaration
export class K extends Component{ //Named export
    //1.Property

    //2.Constructor
    
    //3.Method
    //Every class component must have a render method which returns HTML
    render(){
        return (
            <React.Fragment>
                <sub className="k">Hello {this.props.x}</sub>
                <sub className="k1">Hello {this.props.y}<L name="Hussain"/></sub>
            </React.Fragment>
        );
    }
}
