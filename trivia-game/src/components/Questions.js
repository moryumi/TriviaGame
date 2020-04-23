import React, { Component } from 'react'
import UserConsumer from '../context';
import Navbar from './Navbar';
import Question from './Question';

var uniqid=require('uniqid');



class Questions extends Component {
  
    render() {
        return (
           
            <UserConsumer>
               
            {  value=>{
                    const{questions}=value;
                    return(
                    <div>{
                        
                            questions.map((question,index)=>{   
                                return (
                                    <Question 
                                       
                                        key={index+1}
                                        id={index+1}
                                        currentQuestion={question.question}
                                        correctAnswer={question.correct_answer}
                                        incorrectAnswers={question.incorrect_answers}
                                    />
                                )   
                            })
                       
                    }
                                
                        </div>
                    )
                }
               
            }
       </UserConsumer>
        )
    }
}
export default Questions;