import React, {Component} from 'react';
import './Button.css';
class Button extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const style = {
            width: `${this.props.object.w}`,
            transition: 'width 0.3s'
        }
        const style1 = {
            top: '-5px'
        }
        const style2 = {
            top: '32.5px'
        }
        const style3 = {
            top: '5px'
        }
        const style4 = {
            top: '8px'
        }

        return (
            <div>
            <div className="backButton" >
                <div style={style4} className="boxDark"/>
                <div className="p2"> {this.props.object.text} </div>
                <div style={style} className="topDown">
                    <div style={style1} className="topDownA"></div>
                    <div style={style2} className="topDownA"></div>
                    <div style={style3} className="boxLight"></div>
                    <div className="p1"> {this.props.object.text} </div>
                </div>
            </div>
            </div>
            );
    }
}


export default Button;