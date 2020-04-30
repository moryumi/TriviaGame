import React, { Component } from 'react'
const UserContext=React.createContext();

const reducer=(state,action)=>{
      switch(action.type){
        case "CORRECT_ANSWER":
            return {
                ...state,
              //  id: action.payload.id+1,
                totalPoint:action.payload.totalPointt + 100
            }
        case "NEXT_QUESTION":
            return {
                ...state,
                id: action.payload.id+1,
            }
        case "WRONG_ANSWER":
            return {
                ...state,
                id: 0,
                totalPoint:0
            }
        case "TIME_IS_UP":
            return {
                ...state,
                id: 0,
                totalPoint:0
            }
        case "JOKER_USED":
            return{
                ...state,
                isJokerUsed:true
            }
          case "SELECTED":
            return{
                ...state,
               // questions: state.questions.filter(question=> (action.payload.difficulty == question.difficulty && action.payload.category == question.category ))
               isReRender:true
            }  
    }  
}

export class UserProvider extends Component {
    state={
        questions:[],
        id:0,
        maxPoint:150,
        currentPoint:100,
        totalPoint:0,
        currentRemaningTime:0,
        loading: true,
        difficulty:'',
        category:'',
        isSelected:false,
        isReRender:false,
        dispatch: action=>{
            this.setState(state=> reducer(state,action))
        }
    }
     /* async componentDidUpdate(prevProps, prevState) {
      
       if(prevState.isReRender !== this.state.isReRender){
         console.log("component did update");
        const url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ questions: data.results,isJokerUsed:false});
       }
        
    }  */


    async componentDidMount() {
        const url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ questions: data.results});
    } 
    

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children }  
            </UserContext.Provider>
        )
    }
}

const UserConsumer=UserContext.Consumer;  
export default UserConsumer;