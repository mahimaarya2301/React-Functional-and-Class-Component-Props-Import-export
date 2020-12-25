//Import Area
import React,{Component} from 'react';
import H from './H';//Default import
import './h.css';

//Let's create a class component
//Component Declaration
export class G extends Component{ //Named import
    //1.Property

    //2.Constructor
    constructor(){
        super();//Call Parent Constructor
    }
    //3.Method
    //Every class component must have a render method which returns HTML
    render(){
        return (
            <React.Fragment>
                <span className="g">Hello {this.props.my}</span>
                <h2 className="g">Hello Shivani<H name="Pawan"/></h2>
            </React.Fragment>    
            );
        }
    }