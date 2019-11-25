import React, {Component} from 'react';
import './Skills.css';
import folder from './folder.png';


class Projects extends Component{

    constructor(props){
        super(props);
        this.state = {
            width: '0px',
            filter1: '',
            filter2: '',
            filter3: '',
            filter4: ''
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

    applyFilter3(){
        this.setState({filter3: 'invert(29%) sepia(39%) saturate(4127%) hue-rotate(345deg) brightness(99%) contrast(87%)'});
    }

    applyFilter4(){
        this.setState({filter4: 'invert(29%) sepia(39%) saturate(4127%) hue-rotate(345deg) brightness(99%) contrast(87%)'});
    }

    removeFilter1(){
        this.setState({filter1: ''});
    }

    removeFilter2(){
        this.setState({filter2: ''});
    }

    removeFilter3(){
        this.setState({filter3: ''});
    }

    removeFilter4(){
        this.setState({filter4: ''});
    }

    componentDidMount(){
        this.appear();
    }

    render(){
        return(
            <div>
                <div style={{width: `${this.state.width}`,transition: 'width 0.07s'}} className="back">
                    <div className="top"> <p className="pTop">Projects</p> </div>
                    <div className="pMain">
                    <hr style={{width:'90%', left:'-10px',position:'relative'}}></hr>
                        <ul>
                            <li style={{width:'200px'}}><p style={{marginTop: '3px'}} className="pMainB">CSS Drawing</p> </li>
                            <li onMouseOver={()=> this.applyFilter1()} onMouseOut={()=> this.removeFilter1()}>
                                <a target="_blank" href="https://codepen.io/Mikki0451/pen/QevdEZ?editors=1100">
                                <img style={{filter: `${this.state.filter1}`,width:'50px',height:'50px',}} src={folder}></img>
                                </a>
                            </li>
                        </ul>
                        <hr style={{width:'90%', left:'-10px',position:'relative'}}></hr>
                        <ul>
                            <li style={{width:'200px'}}><p style={{marginTop: '3px'}} className="pMainB">Calculator</p> </li>
                            <li onMouseOver={()=> this.applyFilter2()} onMouseOut={()=> this.removeFilter2()}>
                                <a target="_blank" href="http://msdeus.site/17102/Lab8/">
                                <img style={{filter: `${this.state.filter2}`,width:'50px',height:'50px'}} src={folder}></img>
                                </a>
                            </li>
                        </ul>
                        <hr style={{width:'90%', left:'-10px',position:'relative'}}></hr>
                        <ul>
                            <li style={{width:'200px'}}><p style={{marginTop: '3px'}} className="pMainB">Website Recreation</p> </li>
                            <li onMouseOver={()=> this.applyFilter3()} onMouseOut={()=> this.removeFilter3()}>
                                <a target="_blank" href="http://msdeus.site/17102/Proyecto1/">
                                <img style={{filter: `${this.state.filter3}`,width:'50px',height:'50px'}} src={folder}></img>
                                </a>
                            </li>
                        </ul>
                        <hr style={{width:'90%', left:'-10px',position:'relative'}}></hr>
                        <ul>
                            <li style={{width:'200px'}}><p style={{marginTop: '3px'}} className="pMainB">IGER</p> </li>
                            <li onMouseOver={()=> this.applyFilter4()} onMouseOut={()=> this.removeFilter4()}>
                                <a target="_blank" href="http://18.223.101.121/">
                                <img style={{filter: `${this.state.filter4}`,width:'50px',height:'50px'}} src={folder}></img>
                                </a>
                            </li>
                        </ul>
                        <hr style={{width:'90%', left:'-10px',position:'relative'}}></hr>
                        
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default Projects;