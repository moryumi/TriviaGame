import React, { Component } from 'react'
import UserConsumer from '../context';
import Navbar from './Navbar';
import {withRouter} from 'react-router-dom';

class Question extends Component {
    constructor(props) {
        super(props);
        this.getRandom(this);
       }

    state={
        isCorrect:false,
        randomAnswer:[]
    }

    CheckAnswer=(dispatch,e)=>{
        const{correctAnswer,id}=this.props;
        const newQuestion={    
            id,
            currentPoint:100,
            totalPoint:0
        }
        if(e.target.value==correctAnswer){
            console.log("true");
            this.setState({
                isCorrect:true
            }) 
            dispatch({type:"CORRECT_ANSWER", payload: newQuestion});
            this.props.history.push("/correctanswer")
        }
        else{
            console.log("false");
            this.setState({
                isCorrect:false
            }) 
            dispatch({type:"WRONG_ANSWER", payload: newQuestion});
            this.props.history.push("/wronganswer")
        }
    }

    getRandom=(e)=>{
        const{randomAnswer}=this.state;
        for (let index = 0; index < 4; index++) {
            var rand=Math.floor(Math.random()*4);
            while(randomAnswer.includes(rand))
            {
                rand=Math.floor(Math.random()*4);
            }
            this.setState({
                randomAnswer: randomAnswer.push(rand)
            })
           
        }
       
        console.log(randomAnswer);
    }


    
    render() {
        const{answers,id,currentQuestion,correctAnswer,incorrectAnswers,type,difficulty,category}=this.props;
        const{randomAnswer}=this.state;
        return (
            <UserConsumer>
            {
                value=>{
                    const {questions,dispatch}=value;
                    return (
                       
                            <div className="container"> 
                            <Navbar />
                            {}
                                <ul className="list-group mt-5">
                                        <p className="mb-4"> {currentQuestion} </p> 
                                       
                                        <input onClick={this.CheckAnswer.bind(this,dispatch)} className="btn btn-outline-primary btn-lg mb-3 customButton" type="button" value={answers[randomAnswer[0]]}></input> 
                                        <input onClick={this.CheckAnswer.bind(this,dispatch)} className="btn btn-outline-primary btn-lg mb-3 customButton" type="button" value={answers[randomAnswer[1]]}></input>
                                        <input onClick={this.CheckAnswer.bind(this,dispatch)} className="btn btn-outline-primary btn-lg mb-3 customButton" type="button" value={answers[randomAnswer[2]]}></input>
                                        <input onClick={this.CheckAnswer.bind(this,dispatch)} className="btn btn-outline-primary btn-lg mb-3 customButton" type="button" value={answers[randomAnswer[3]]}></input>
                                        
                                    {/*  <button type="button" className="btn btn-outline-primary mb-2" > A: {correctAnswer} </button> 
                                        <button type="button" className="btn btn-outline-primary mb-2" > B: {incorrectAnswers[0]} </button> 
                                        <button type="button" className="btn btn-outline-primary mb-2" > C: {incorrectAnswers[1]} </button> 
                                        <button type="button" className="btn btn-outline-primary mb-2" > D: {incorrectAnswers[2]} </button>  */}
                                        
                                </ul>
                            </div>
                            
                  
                    
                    )
                }
            }
            </UserConsumer>
        )
    }
}
export default withRouter(Question);