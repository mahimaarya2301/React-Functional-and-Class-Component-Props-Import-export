//Import Area
import React,{Component} from 'react';
import P from './P';//Default import
import './p.css';

//Let's create a class component
//Component Declaration
export class O extends Component{ //Named export
    //1.Property

    //2.Constructor
    
    //3.Method
    //Every class component must have a render method which returns HTML
    render(){
        return (
            <React.Fragment>
                <h1 className="o">Hello {this.props.a}</h1>
                <h2 className="o">Hello {this.props.b}<P myname="Vanraj"/></h2>
            </React.Fragment>
        );
    }
}
