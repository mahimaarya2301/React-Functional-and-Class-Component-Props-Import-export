//Import Area
import React,{Component} from 'react';
import { Z } from './Z';//Named import

//Let's create a class component
//Component Declaration
class Y extends Component{
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
                <strong className="y">Hello {this.props.m}</strong>
                <Z myname="Mahi"/>
            </React.Fragment>
        );
    }
}
//Default export
export default Y;