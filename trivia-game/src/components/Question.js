import React, { Component } from 'react'
import UserConsumer from '../context';
class Question extends Component {
    
    render() {
        const{id,currentQuestion,correctAnswer,incorrectAnswers,type,difficulty,category}=this.props;
        
        return (
            <UserConsumer>
            {
                value=>{
                   // const {dispatch}=value;
                    return (
                        <div className="container col-md-8 mb-4">
                        { 
                         <div className="card bg-light mb-3" >
                           
                              <p > Question{id}: {currentQuestion} </p> 
                                 <button type="button" className="btn btn-outline-primary mb-2" > A: {correctAnswer} </button> 
                                 <button type="button" className="btn btn-outline-primary mb-2" > B: {incorrectAnswers[0]} </button> 
                                 <button type="button" className="btn btn-outline-primary mb-2" > C: {incorrectAnswers[1]} </button> 
                                 <button type="button" className="btn btn-outline-primary mb-2" > D: {incorrectAnswers[2]} </button> 
                                
                         </div>
                        
                         }
                     </div>
                    )
                }
            }
            </UserConsumer>
            
        )
    }
}
export default Question;