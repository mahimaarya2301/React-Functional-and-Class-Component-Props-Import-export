//Import Area
import React,{Component} from 'react';
import { N } from './N';//Named import
import './n.css';

//Let's create a class component
//Component Declaration
class M extends Component{
    //1.Property

    //2.Constructor
    
    //3.Method
    //Every class component must have a render method which returns HTML
    render(){
        return (
            <React.Fragment>
                <h1 className="m">Hello Payal</h1>
                <h1 className="m1">Hello {this.props.x}</h1>
                <N myname="Abhay"/>
            </React.Fragment>
        );
    }
}
//Default export
export default M;