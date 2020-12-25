//Import Area
import React,{Component} from 'react';
import D from './D';//Defaultimport
import './d.css';

//Let's create a class component
//Component Declaration
export class C extends Component{ //Named export
    //1.Property

    //2.Constructor
    
    //3.Method
    //Every class component must have a render method which returns HTML
    render(){
        return (
            <React.Fragment>
                <h1 className="C">Hello {this.props.x}</h1>
                <h2 className="C">Hello {this.props.y}<D myname="Mohammad"/></h2>
            </React.Fragment>
        );
    }
}
