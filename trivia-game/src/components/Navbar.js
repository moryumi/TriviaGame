import React, { Component } from 'react'
import UserConsumer from '../context';
import Timer from './Timer';


class Navbar extends Component {
    state={
        isJokerUsed:false
    }
    clicked=(dispatch,e)=>{
       
        const{isJokerUsed}=this.state;
        this.setState({isJokerUsed:true})
        const isJokerUsedO={
            isJokerUsed
        }
        dispatch({type:"JOKER_USED", payload:isJokerUsedO});
    }
    render() {
        return (
            <UserConsumer>
                
                {  value=>{
                    const{id,totalPoint,dispatch,isJokerUsed}=value;
                    return(
                       
                        <div className="container ">
                             <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-5 p-3" >
                         
                            <div className="container ">
                                <div className="container">
                                    <a className="text-light">Question {id+1} / 10</a>
                                </div>
                                <div className="container">
                                    <a className="text-light">{totalPoint} Points </a>
                                </div>
                                <div className="container">
                                    <a className="text-light">Remaining Time <Timer/> </a>
                                </div>
                                </div>
                           </nav> 
                            <button type="button" onClick={this.clicked.bind(this,dispatch)} className="btn btn-outline-warning btn-lg" disabled={isJokerUsed}><i className="fas fa-star-half"></i>JOKER </button>
                        </div>
                           
                  )}
                }
            </UserConsumer> 
            
        )
    }
}
export default Navbar;