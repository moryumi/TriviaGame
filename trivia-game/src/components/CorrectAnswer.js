import React, { Component } from 'react'
import {Link} from "react-router-dom";
import UserConsumer from '../context';
import Navbar from './Navbar';

class CorrectAnswer extends Component {
    NextQuestion=(dispatch,id,e)=>{
        const newQuestion={
            id
        }
       // console.log("clicekd next question");
        dispatch({type:"NEXT_QUESTION", payload:newQuestion}); 
        this.props.history.push(`/questions/${id+1}`)
    }

    render() {
        return (
            <UserConsumer>
                {  value=>{
                    const{currentPoint,totalPoint,id,dispatch}=value;
                    return(
                    <div>{
                        <div className="container">
                            <Navbar isCorrect={true}/>
                            <img className="logo rounded mb-3" style={{width:150}}src={require("../images/correct4.png")} alt="logo"/>
                            <p> Correct! </p>
                            <p> You have earned {currentPoint} points </p>
                            <p> Total : {totalPoint} points </p>
                            {/* {id==10 ? "Congratulations !!" :<Link to={`/questions/${value.id}`}><button type="button"className="btn btn-primary btn-lg mt-3" style={{width:350}}>Next Question</button></Link> } */}
                            {id==10 ? "Congratulations !!" :<button type="button" onClick={this.NextQuestion.bind(this,dispatch,id)} className="btn btn-primary btn-lg mt-3" style={{width:350}}>Next Question</button> }
                        </div>
                        }   
                    </div>)}
                }
            </UserConsumer> 
        )
    }
}
export default CorrectAnswer;
