//Import Area
import React,{Component} from 'react';
import { V } from './V';//Named import
import './v.css';

//Let's create a class component
//Component Declaration
class U extends Component{
    //1.Property

    //2.Constructor
    
    //3.Method
    //Every class component must have a render method which returns HTML
    render(){
        return (
            <React.Fragment>
                <h1 className="u">Hello {this.props.m}</h1>
                <V myname="Prisha"/>
            </React.Fragment>
        );
    }
}
//Default export
export default U;