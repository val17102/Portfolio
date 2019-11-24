import React, {Component} from 'react';
import './Navigator.css';
class Navigator extends Component{
    constructor(props){
        super(props);
    }
    

    render(){
        const style = {
            top: `${this.props.object.pos}`,
            transition: 'top 0.3s',
            left: '30px',
            position: 'relative',
            width: '30px'
        }

        return(
            <div style={style}>
                <div className="Arrow1">
                    <div className="Arrow2"></div>
                    <div className="Point"></div>
                </div>
            </div>
        );
    }
}

export default Navigator