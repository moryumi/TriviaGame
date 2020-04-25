import React, { Component } from 'react'
import UserConsumer from '../context';
import Navbar from './Navbar';
import Question from './Question';


class Questions extends Component {

    render() {
        return (
            <UserConsumer>
            {  value=>{
                    const{questions,id}=value;
                    return(
                    <div>{
                            questions.map((question,index)=>{  
                                if(index==id){
                                    return (
                                    <Question 
                                        key={index}
                                        id={index}
                                        currentQuestion={question.question}
                                        answers={[question.correct_answer,question.incorrect_answers[0],question.incorrect_answers[1],question.incorrect_answers[2]]}
                                        correctAnswer={question.correct_answer}
                                       // incorrectAnswers={question.incorrect_answers}
                                        currentQuestionIndex={index}
                                    />
                                  
                                ) } 
                                else{
                                }
                            })
                    }   
                    </div>)
                }
            }
            </UserConsumer>
        )
    }
}
export default Questions;