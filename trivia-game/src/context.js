import React, { Component } from 'react'
const UserContext=React.createContext();

const reducer=(state,action)=>{
    /* switch(action.type){
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user=> action.payload !== user.id)
            }
         case "ADD_USER":
            return{
                ...state,
                users: [...state.users,action.payload]
            } 
    } */
}

export class UserProvider extends Component {
    state={
        questions:[],
        loading: true,
        dispatch: action=>{
            this.setState(state=> reducer(state,action))
        }
    }
    async componentDidMount() {
        const url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ questions: data.results, loading: false });
      }
   
  
    
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children }  
            </UserContext.Provider>
        )
    }
}

const UserConsumer=UserContext.Consumer;  //value'yu kullanmak icin consumer olusturduk
export default UserConsumer; // diger dosyalarda kullanmak icin export ediyosun