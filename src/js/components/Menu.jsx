import React, {Component} from 'react';
import Button from './Button.jsx'
import Navigator from './Navigator.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import About from './About.jsx'
import Hobbies from './Hobbies.jsx'
import Contact from './Contact.jsx'
import BottomBar from './BottomBar.jsx'
import './Menu.css'

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {w1:'100%',w2:'0%',w3:'0%',w4:'0%',w5:'0%',pos:'7px',select: 1}
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
            <div style={{top:'-45%', left:'20%', height:'160%'}} className="line"></div>
            <div style={{top:'-45%', left:'25%', height:'160%'}} className="line"></div>
            <div style={{top:'-45%', left:'30%', height:'150%'}} className="line"></div>

            <div style={{top:'-40%', left:'75%', height:'140%'}} className="line1"></div>
            <div style={{top:'-40%', left:'80%', height:'150%'}} className="line1"></div>
            <div style={{top:'-40%', left:'85%', height:'150%'}} className="line1"></div>
            <div style={{top:'-24%', left:'40%'}} className="welcome"> Welcome</div>
            <div style={{top:'-10%'}} className="line2"></div>
            <div style={{position:'absolute', top:'50px',left:'8%',width:'400px',height:'30px',zIndex:'-3'}} onMouseOver={()=> this.change(1)}>
                <Button object={{w:this.state.w1,t:'50px', text:'About Me'}} ></Button>
            </div>
            <div style={{position:'absolute', top:'100px',left:'8%',width:'400px',height:'30px',zIndex:'-3'}} onMouseOver={()=> this.change(2)}>
                <Button object={{w:this.state.w2,t:'100px', text:'Skills'}} ></Button>
            </div>
            <div style={{position:'absolute', top:'150px',left:'8%',width:'400px',height:'30px',zIndex:'-3'}} onMouseOver={()=> this.change(3)}>
                <Button object={{w:this.state.w3,t:'150px', text:'Projects'}} ></Button>
            </div>
            <div style={{position:'absolute', top:'200px',left:'8%',width:'400px',height:'30px',zIndex:'-3'}} onMouseOver={()=> this.change(4)}>
                <Button object={{w:this.state.w4,t:'200px', text:'Hobbies'}} ></Button>
            </div>
            <div style={{position:'absolute', top:'250px',left:'8%',width:'400px',height:'30px',zIndex:'-3'}} onMouseOver={()=> this.change(5)}>
                <Button object={{w:this.state.w5,t:'250px', text:'Contact'}} ></Button>
            </div>
            <div className="Scroll"/>
            <div className="Scroll2"/>
            <div style={{position:'absolute', top:'-30px',left:'66%', width:'28.5%'}}>
                {this.state.select == 2
                    ? <Skills></Skills>
                    : this.state.select == 3
                    ? <Projects></Projects>
                    : this.state.select == 1
                    ? <About></About>
                    : this.state.select == 4
                    ?<Hobbies></Hobbies>
                    : this.state.select == 5
                    ? <Contact></Contact>
                    : <div></div>
                }
            </div>
            <Navigator object={{pos:this.state.pos}}></Navigator>
            <div style={{position:'absolute', bottom:'1px',left:'5%',width:'89.5%'}}>
            {this.state.select == 2
                    ?<BottomBar text={{message: 'These are some of my programming skills'}}></BottomBar>
                    : this.state.select == 3
                    ? <BottomBar text={{message: 'Here are the projects I have worked on, click on them should you wish to view them'}}></BottomBar>
                    : this.state.select == 1
                    ? <BottomBar text={{message: 'Hello my name is Miguel Valle'}}></BottomBar>
                    : this.state.select == 4
                    ?<BottomBar text={{message: 'Some of my hobbies'}}></BottomBar>
                    : this.state.select == 5
                    ? <BottomBar text={{message: 'Ways you can contact me and see what I work on'}}></BottomBar>
                    : <BottomBar text={{message: ''}}></BottomBar>
            }
            </div>
            
        </div>
        );
    }
}
export default Menu;