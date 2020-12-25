//Import Area
import React,{Component} from 'react';
import X from './X';//Defaultimport
import './x.css';

//Let's create a class component
//Component Declaration
export class W extends Component{ //Named export
    //1.Property

    //2.Constructor
    
    //3.Method
    //Every class component must have a render method which returns HTML
    render(){
        return (
            <React.Fragment>
                <sub className="w">Hello {this.props.x}</sub>
                <span className="w">Hello {this.props.y}<X myname="Vansh"/></span>
            </React.Fragment>
        );
    }
}
