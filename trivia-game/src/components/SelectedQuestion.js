import React, { Component } from 'react'
import UserConsumer from '../context';
import { withRouter } from 'react-router-dom';
//import {createBrowserHistory} from 'history';
//export const history = createBrowserHistory({forceRefresh:true})

class SelectedQuestion extends Component {
    
  state={
      difficultySelected:false,
      categorySelected:false
  }
    changeDifficulty=(difficulty,e)=>{
        if(e.target.value==null){
           
        }else{
            this.setState({
                difficulty:e.target.value,
                difficultySelected:true
            })
        } 
    }

    changeCategory=(category,e)=>{
        if(e.target.value==null){
           
        }else{
            this.setState({
                category:e.target.value,
                categorySelected:true
            })
        }
    }

    selected=(dispatch,id,e)=>{
        const{categorySelected,difficultySelected}=this.state;
        if(categorySelected && difficultySelected){
            const selectedQuestions={
                difficulty:this.state.difficulty,
                category:this.state.category
            }
            dispatch({type:"SELECTED", payload: selectedQuestions})
           // console.log("dolu");
           // console.log("selectedquestion"+selectedQuestions.difficulty);
           // console.log("selectedquestion"+selectedQuestions.category);
            this.props.history.push(`/questions/${id}`);  
        }else{
            console.log("booos");
        }
    }

    render() {
        return (
            <UserConsumer>
            {
                value=>{
                    const{id,dispatch,difficulty,category}=value;
                    return (
                        <div className="container col-md-8 mt-4">
                           
                                <label > Difficulty: </label> 
                                    <select name="difficulty" className="custom-select" id="inputGroupSelect01" onChange={this.changeDifficulty.bind(this,difficulty)}>
                                        <option value="DEFAULT">Choose...</option>
                                        <option value="easy">Easy</option>
                                        <option value="medium">Medium</option>
                                        <option value="hard">Hard</option>
                                    </select>

                                <label className=" mt-4"> Category: </label> 
                                    <select name="category" className="custom-select" id="inputGroupSelect01" onChange={this.changeCategory.bind(this,category)}>
                                        <option value="DEFAULT">Choose...</option>
                                        <option value="10">General Knowledge</option>
                                        <option value="11">Entertainment:Books</option>
                                        <option value="12">Entertainment:Film</option>
                                        <option value="13">Entertainment:Music</option>
                                        <option value="14">Entertainment:Musicals </option>
                                    </select>
                                <button type="button" onClick={this.selected.bind(this,dispatch,id)} className="btn btn-primary btn-lg mt-5" style={{width:350}}>GET STARTED</button>
                        </div>
                    )
                }
            }
            </UserConsumer>
        )
    }
}
export default withRouter(SelectedQuestion);