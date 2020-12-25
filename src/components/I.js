//Import Area
import React,{Component} from 'react';
import { J } from './J';//Named import
import './j.css';

//Let's create a class component
//Component Declaration
class I extends Component{
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
                <h1 className="i">Hello {this.props.my}</h1>
                <J myname="Bhupendra"/>
            </React.Fragment>
        );
    }
}
//Default export
export default I;