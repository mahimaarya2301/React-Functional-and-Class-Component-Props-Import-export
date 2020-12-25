//Import Area
import React,{Component} from 'react';
import T from './T';//Defaultimport
import './t.css';

//Let's create a class component
//Component Declaration
export class S extends Component{ //Named export
    //1.Property

    //2.Constructor
    
    //3.Method
    //Every class component must have a render method which returns HTML
    render(){
        return (
            <React.Fragment>
                <h1 className="s">Hello {this.props.x}</h1>
                <h2 className="s1">Hello {this.props.y}<T myname="Siddhi"/></h2>
            </React.Fragment>
        );
    }
}
