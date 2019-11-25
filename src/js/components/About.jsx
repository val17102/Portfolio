import React, {Component} from 'react';
import './Skills.css'

class About extends Component{

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
                <div style={{width: `${this.state.width}`,transition: 'width 0.05s'}} className="back">
                    <div className="top"> <p className="pTop">About Me</p> </div>
                    <div className="pMain">
                        <p style={{marginTop: '3px'}} className="pMainB">Hello</p>
                        <hr style={{width:'90%', left:'-10px',position:'relative'}}></hr>
                        <p style={{textAlign: 'justify', width: '90%'}}> I am currently studying Computer Science with a specialization in Videogame Development, 
                            the listed options have more information about my abilities, projects I have worked on and my contact information.</p>
                        <hr style={{width:'90%', left:'-10px',position:'relative'}}></hr>
                        <p style={{textAlign: 'justify', width: '90%'}}> My goals as a programmer are to become a game developer, 
                        and also to be a web developer.</p>
                        <hr style={{width:'90%', left:'-10px',position:'relative'}}></hr>
                        
                        
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default About;