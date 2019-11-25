import React, {Component} from 'react';
import './Skills.css'

class Skills extends Component{

    constructor(props){
        super(props);
        this.state = {
            width: '0px'
        }
    }

    appear(){
        setTimeout(() =>{
        this.setState({
            width: '100%'
        })
    }, 200)

    }

    componentDidMount(){
        this.appear();
    }

    render(){
        return(
            <div>
                <div style={{width: `${this.state.width}`,transition: 'width 0.07s'}} className="back">
                    <div className="top"> <p className="pTop">Skills</p> </div>
                    <div className="pMain">
                        <p style={{marginTop: '3px'}} className="pMainB">Languages</p>
                        <hr style={{width:'90%', left:'-10px',position:'relative'}}></hr>
                        <ul>
                            <li>Python: </li>
                            <li><div style={{width:'70%'}} className="progress"/></li>
                            <li style={{textAlign: 'right'}}>70/100</li>
                        </ul>

                        <ul>
                            <li>Javascript:</li>
                            <li><div style={{width:'55%'}} className="progress"/></li>
                            <li style={{textAlign: 'right'}}>55/100</li>
                        </ul>
                        <ul>
                            <li>Java:</li>
                            <li><div style={{width:'55%'}} className="progress"/></li>
                            <li style={{textAlign: 'right'}}>55/100</li>
                        </ul>
                        <ul>
                            <li>C++:</li>
                            <li><div style={{width:'45%'}} className="progress"/></li>
                            <li style={{textAlign: 'right'}}>45/100</li>
                        </ul>
                        <ul>
                            <li>C#:</li>
                            <li><div style={{width:'45%'}} className="progress"/></li>
                            <li style={{textAlign: 'right'}}>45/100</li>
                        </ul>
                        <p className="pMainB">Frameworks</p>
                        <hr style={{width:'90%', left:'-10px',position:'relative'}}></hr>
                        <ul>
                            <li>Django:</li>
                            <li><div style={{width:'50%'}} className="progress"/></li>
                            <li style={{textAlign: 'right'}}>50/100</li>
                        </ul>
                        <ul>
                            <li>Express:</li>
                            <li><div style={{width:'35%'}} className="progress"/></li>
                            <li style={{textAlign: 'right'}}>35/100</li>
                        </ul>
                        <ul>
                            <li>Vue:</li>
                            <li><div style={{width:'35%'}} className="progress"/></li>
                            <li style={{textAlign: 'right'}}>35/100</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default Skills;