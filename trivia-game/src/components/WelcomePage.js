import React, { Component } from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import UserConsumer from '../context';

class WelcomePage extends Component {
  
    render() {
        const{currentId}=this.props.match.params;
        return (
            <UserConsumer>
                {   value=>{
                        const{id}=value;
                        return(
                            <div className="container col-md-8 mb-4 ">
                            <img className="logo rounded mb-3" src={require("../images/quiz.png")} alt="logo"/>
                            <p> A TRIVIA GAME </p>
                        
                            <Link to={`/questions/${id}`}><button type="button" className="btn btn-primary btn-lg mt-5" style={{width:350}}>GET STARTED</button></Link>
                        </div>
                        )}
                }
            </UserConsumer> 
        ) 
    }
}
export default WelcomePage;
