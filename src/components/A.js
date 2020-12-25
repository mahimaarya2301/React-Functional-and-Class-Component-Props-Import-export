//Import Area
import React,{Component} from 'react';
import { B } from './B';//Named import
import './b.css';

//Let's create a class component
//Component Declaration
class A extends Component{
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
                <h1 className="a">Hello Mahima</h1>
                <h1 className="b">Hello {this.props.name}</h1>
                <B myname="Aayushi"/>
            </React.Fragment>
        );
    }
}
//Default export
export default A;