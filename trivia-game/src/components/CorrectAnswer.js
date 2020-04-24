import React, { Component } from 'react'
import {Link} from "react-router-dom";
import UserConsumer from '../context';

class CorrectAnswer extends Component {
    render() {
      
        return (
            <UserConsumer>
                
                {  value=>{
                    const{currentPoint,totalPoint,id}=value;
                    return(
                    <div>{
                        <div className="container">
                            <img className="logo rounded mb-3" style={{width:150}}src={require("../images/correct4.png")} alt="logo"/>
                            <p> Correct! </p>
                            <p> You have earned {currentPoint} points </p>
                            <p> Total : {totalPoint} points </p>
                            {id==10 ? "Congratulations !!" :<Link to={`/questions/${value.id}`}><button type="button" className="btn btn-primary btn-lg mt-3" style={{width:350}}>Next Question</button></Link> }
                        </div>
                        }   
                    </div>)}
                }
            </UserConsumer> 
        )
    }
}
export default CorrectAnswer;
