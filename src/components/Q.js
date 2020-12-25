//Import Area
import React,{Component} from 'react';
import { R } from './R';//Named import
import './r.css';

//Let's create a class component
//Component Declaration
class Q extends Component{
    //1.Property

    //2.Constructor
    constructor(){
        super();//Call parent constructor
    }
    //3.Method
    //Every class component must have a render method which returns HTML
    render(){
        return (
            <React.Fragment>
                <h1 className="q">Hello {this.props.myname}</h1>
                <R myname="Dev"/>
            </React.Fragment>
        );
    }
}
//Default export
export default Q;