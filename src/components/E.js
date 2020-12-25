//Import Area
import React,{Component} from 'react';
import { F } from './F';//Named import
import './f.css';

//Let's create a class component
//Component Declaration
class E extends Component{ 
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
                <h1 className="e">Hello {this.props.m}</h1>
                <h2>Hello Yogesh<F name="Aakansha"/></h2>
            </React.Fragment>
        );
    }
}
export default E;//Default export