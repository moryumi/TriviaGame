import React, { Component } from 'react'
import UserConsumer from '../context';
import Navbar from './Navbar';
import {withRouter} from 'react-router-dom';

class Question extends Component {
    
    state={
        isCorrect:false
    }

    CheckAnswer=(dispatch,e)=>{
        const{correctAnswer,id}=this.props;
        const{isCorrect}=this.state;
        if(e.target.value==correctAnswer){
            console.log("true");
            this.setState({
                isCorrect:true
            }) 
            const newQuestion={
                isCorrect,
                id
            }
            dispatch({type:"CORRECT_ANSWER", payload: newQuestion});
            this.props.history.push("/correctanswer")
        }
        else{
            console.log("false");
            this.setState({
                isCorrect:false
            }) 
            const newQuestion={
                isCorrect,
                id
            }
            dispatch({type:"WRONG_ANSWER", payload: newQuestion});
            this.props.history.push("/wronganswer")
        }
    }

    render() {
        const{id,currentQuestion,correctAnswer,incorrectAnswers,type,difficulty,category}=this.props;
         
        return (
            <UserConsumer>
            {
                value=>{
                    const {dispatch}=value;
                    return (
                        
                        <div className="container">
                        
                        <div className="container mt-5">
                            <ul className="list-group mt-5">
                                    <a className="mb-4"> Question{id}: {currentQuestion} </a> 
                                    <input onClick={this.CheckAnswer.bind(this,dispatch)} className="btn btn-outline-primary mb-3" type="button" value={correctAnswer}></input> 
                                    <input onClick={this.CheckAnswer.bind(this,dispatch)} className="btn btn-outline-primary mb-3" type="button" value={incorrectAnswers[0]}></input>
                                    <input onClick={this.CheckAnswer.bind(this,dispatch)} className="btn btn-outline-primary mb-3" type="button" value={incorrectAnswers[1]}></input>
                                    <input onClick={this.CheckAnswer.bind(this,dispatch)} className="btn btn-outline-primary mb-3" type="button" value={incorrectAnswers[2]}></input>
                                    
                                {/*  <button type="button" className="btn btn-outline-primary mb-2" > A: {correctAnswer} </button> 
                                    <button type="button" className="btn btn-outline-primary mb-2" > B: {incorrectAnswers[0]} </button> 
                                    <button type="button" className="btn btn-outline-primary mb-2" > C: {incorrectAnswers[1]} </button> 
                                    <button type="button" className="btn btn-outline-primary mb-2" > D: {incorrectAnswers[2]} </button>  */}
                                    
                            </ul>
                        </div>
                              
                         
                        
                         
                     </div>
                    )
                }
            }
            </UserConsumer>
            
        )
    }
}
export default withRouter(Question);