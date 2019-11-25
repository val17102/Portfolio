import React, {Component} from 'react';
import './BottomBar.css';
class BottomBar extends Component{
    constructor(props){
        super(props);
    }
    
    render(){

        return (
            <div className="bar">
            <div className="typewriter">
                {this.props.text.message}
            </div>
            </div>
            );
    }
}


export default BottomBar;