import React, { Component } from 'react'
import {Link} from "react-router-dom";
import UserConsumer from '../context';

class TimesUp extends Component {
    
timeIsUp=(dispatch,id,totalPoint,e)=>{
    //const{isCorrect}=this.state;
    const newQuestion={    
        id,
        totalPointt:totalPoint
    }
    dispatch({type:"TIME_IS_UP", payload:newQuestion}); 
    this.props.history.push("/")
}
    render() {
        return (
            <UserConsumer>
                {  value=>{
                    const{dispatch,id,totalPoint}=value;
                    return(
                        <div>
                        <div className="container">
                           <img className="logo rounded mb-4" style={{width:150}}src={require("../images/timesup.png")} alt="logo"/>
                           <p> Time is up ! </p>
                          <button onClick={this.timeIsUp.bind(this,dispatch,id,totalPoint)} type="button" className="btn btn-primary btn-lg mt-4" style={{width:350}}>START AGAIN</button>
                       </div>
                   </div>)}
                }
            </UserConsumer> 
            
            
        )
    }
}

export default TimesUp;