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
                                        correctAnswer={question.correct_answer}
                                        incorrectAnswers={question.incorrect_answers}
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