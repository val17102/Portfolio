import React, {Component} from 'react';
import Button from './Button.jsx'
import Navigator from './Navigator.jsx'
import Skills from './Skills.jsx'
import './Menu.css'

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {w1:'100%',w2:'0%',w3:'0%',w4:'0%',w5:'0%',pos:'7px',select: 0}
        this.change = this.change.bind(this);
    }

    change(i){
        if(i==1){
            this.setState({w1:'100%',w2:'00%',w3:'00%',w4:'0%',w5:'0%',pos:'7px',select: 1})
        } else 
        if(i==2){
            this.setState({w1:'00%',w2:'100%',w3:'00%',w4:'0%',w5:'0%',pos:'57px',select: 2})
        } else 
        if(i==3){
            this.setState({w1:'00%',w2:'00%',w3:'100%',w4:'0%',w5:'0%',pos:'107px',select: 3})
        } else
        if(i==4){
            this.setState({w1:'00%',w2:'00%',w3:'00%',w4:'100%',w5:'00%',pos:'157px',select: 4})
        } else
        if(i==5){
            this.setState({w1:'00%',w2:'00%',w3:'00%',w4:'00%',w5:'100%',pos:'207px',select: 5})
        }
    }

    render(){
        return (
        <div style={{position: 'absolute', height:'75%', zIndex:'-2', width: '100%', top: '20%'}}>
            <div style={{position:'absolute', top:'50px',left:'80px',width:'400px',height:'30px',zIndex:'-3'}} onMouseOver={()=> this.change(1)}>
                <Button object={{w:this.state.w1,t:'50px', text:'About Me'}} ></Button>
            </div>
            <div style={{position:'absolute', top:'100px',left:'80px',width:'400px',height:'30px',zIndex:'-3'}} onMouseOver={()=> this.change(2)}>
                <Button object={{w:this.state.w2,t:'100px', text:'Skills'}} ></Button>
            </div>
            <div style={{position:'absolute', top:'150px',left:'80px',width:'400px',height:'30px',zIndex:'-3'}} onMouseOver={()=> this.change(3)}>
                <Button object={{w:this.state.w3,t:'150px', text:'Projects'}} ></Button>
            </div>
            <div style={{position:'absolute', top:'200px',left:'80px',width:'400px',height:'30px',zIndex:'-3'}} onMouseOver={()=> this.change(4)}>
                <Button object={{w:this.state.w4,t:'200px', text:'Hobbies'}} ></Button>
            </div>
            <div style={{position:'absolute', top:'250px',left:'80px',width:'400px',height:'30px',zIndex:'-3'}} onMouseOver={()=> this.change(5)}>
                <Button object={{w:this.state.w5,t:'250px', text:'Contact'}} ></Button>
            </div>
            <div className="Scroll"/>
            <div className="Scroll2"/>
            <div style={{position:'absolute', top:'-10px',left:'65%'}}>
                {this.state.select == 2
                    ? <Skills></Skills>
                    : <div/>
                }
            </div>
            <Navigator object={{pos:this.state.pos}}></Navigator>
        </div>
        );
    }
}
export default Menu;