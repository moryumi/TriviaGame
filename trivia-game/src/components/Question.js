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
        randomAnswer:[],
        isJokerUsed:false,
        isCorrect:false
    }


    CheckAnswer=(dispatch,totalPoint,e)=>{
        const{correctAnswer,id}=this.props;
        //const{isCorrect}=this.state;
        const newQuestion={    
            id,
            totalPointt:totalPoint
        }
        if(e.target.value==correctAnswer){
            console.log("true");
        
            this.setState({
                isCorrect:true
            }); 
          
            dispatch({type:"CORRECT_ANSWER", payload: newQuestion}); 
            this.props.history.push("/correctanswer")
           
        }
        else{
            console.log("false");
            /* this.setState({
                isCorrect:false
            })  */
            dispatch({type:"WRONG_ANSWER", payload: newQuestion});
            this.props.history.push("/wronganswer")
        }
    }

 
    
    getRandom=(e)=>{
        const{randomAnswer}=this.state;
        const{answers}=this.props;
        var length=answers.length;

        for (let index = 0; index < length; index++) {
            var rand=Math.floor(Math.random() * length);
            while(randomAnswer.includes(answers[rand]))
            {
                rand=Math.floor(Math.random() * length);
            }
            this.setState({
                randomAnswer: randomAnswer.push(answers[rand])
            })
        }
       console.log(randomAnswer);
    }

    jokerClicked=(dispatch,e)=>{
        const{isJokerUsed,randomAnswer}=this.state;
        this.setState({isJokerUsed:true})
        const{incorrectAnswers}=this.props;
        const isJokerUsedO={
            isJokerUsed
        }
        dispatch({type:"JOKER_USED", payload:isJokerUsedO});
    }

    render() {
        const{answers,id,currentQuestion,correctAnswer,incorrectAnswers,type,difficulty,category}=this.props;
        const{randomAnswer}=this.state;
        return (
            <UserConsumer>
            {
                value=>{
                    const {dispatch,isJokerUsed,totalPoint}=value;
                    return (
                       
                            <div className="container"> 
                            <Navbar />
                            <button type="button" onClick={this.jokerClicked.bind(this,dispatch)} className="btn btn-outline-warning btn-lg" disabled={isJokerUsed}><i className="fas fa-star-half"></i>JOKER </button>
                                <ul className="list-group mt-4">
                                        <p className="mb-4"> {currentQuestion} </p> 
                                       
                                        <input onClick={this.CheckAnswer.bind(this,dispatch,totalPoint)} className="btn btn-outline-primary btn-lg mb-3 customButton" type="button" value={randomAnswer[0]}></input> 
                                        <input onClick={this.CheckAnswer.bind(this,dispatch,totalPoint)} className="btn btn-outline-primary btn-lg mb-3 customButton" type="button" value={randomAnswer[1]}></input>
                                        <input onClick={this.CheckAnswer.bind(this,dispatch,totalPoint)} className="btn btn-outline-primary btn-lg mb-3 customButton" type="button" value={randomAnswer[2]}></input>
                                        <input onClick={this.CheckAnswer.bind(this,dispatch,totalPoint)} className="btn btn-outline-primary btn-lg mb-3 customButton" type="button" value={randomAnswer[3]}></input>
                                        
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