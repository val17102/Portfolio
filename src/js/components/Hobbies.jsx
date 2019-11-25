import React, {Component} from 'react';
import './Skills.css'

class Hobbies extends Component{

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
                    <div className="top"> <p className="pTop">Hobbies</p> </div>
                    <div className="pMain">
                        <p style={{marginTop: '3px'}} className="pMainB">Things I Like</p>
                        <hr style={{width:'90%', left:'-10px',position:'relative'}}></hr>
                        <ul className="ulb">
                            <li className="lib">Videgames</li>
                            <li className="lib">Movies</li>
                            <li className="lib">Piano</li>
                            <li className="lib">Archery</li>
                            <li className="lib">Rock and Roll</li>
                            <li className="lib">UFC</li>
                            <li className="lib">Warhammer40k</li>
                            <li className="lib">Comics</li>
                            <li className="lib">Food</li>
                        </ul>
                        <hr style={{width:'90%', left:'-10px',position:'relative'}}></hr>
                        
                        
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default Hobbies;