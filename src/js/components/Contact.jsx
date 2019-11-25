import React, {Component} from 'react';
import './Skills.css'
import github from './github.png'
import gmail from './gmail.png'

class Contact extends Component{

    constructor(props){
        super(props);
        this.state = {
            width: '0px',
            filter1: '',
            filter2: '',

        }
    }

    appear(){
        setTimeout(() =>{
        this.setState({
            width: '100%'
        })
    }, 200)

    }

    applyFilter1(){
        this.setState({filter1: 'invert(29%) sepia(39%) saturate(4127%) hue-rotate(345deg) brightness(99%) contrast(87%)'});
    }

    applyFilter2(){
        this.setState({filter2: 'invert(29%) sepia(39%) saturate(4127%) hue-rotate(345deg) brightness(99%) contrast(87%)'});
    }

    removeFilter1(){
        this.setState({filter1: ''});
    }

    removeFilter2(){
        this.setState({filter2: ''});
    }

    componentDidMount(){
        this.appear();
    }

    render(){
        return(
            <div>
                <div style={{width: `${this.state.width}`,transition: 'width 0.05s'}} className="back">
                    <div className="top"> <p className="pTop">Contact Links</p> </div>
                    <div style={{height:'100%'}} className="pMain">
                        <p style={{marginTop: '3px'}} className="pMainB"></p>
                        <hr style={{width:'90%', left:'-10px',position:'relative'}}></hr>
                        <a href="https://github.com/val17102" target="_blank"><img style={{position: 'relative', width:'80px', height:'80px', left:'20%',top:'110px', 
                        filter: `${this.state.filter1}`}} src={github} onMouseOver={()=> this.applyFilter1()} onMouseOut={()=> this.removeFilter1()}></img></a>
                        <a href="mailto:val17102@uvg.edu.gt?subject=Hello"><img style={{position: 'relative', width:'80px', height:'80px',top:'110px',left:'33%', 
                        filter: `${this.state.filter2}`}} src={gmail} onMouseOver={()=> this.applyFilter2()} onMouseOut={()=> this.removeFilter2()}></img></a>
                        <hr style={{width:'90%', left:'-10px',position:'relative',top:'230px'}}></hr>
                        
                        
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;