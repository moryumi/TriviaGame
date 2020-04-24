import React, { Component } from 'react'
import UserConsumer from '../context';
import Timer from './Timer';

class Navbar extends Component {
    render() {
       
        return (
            <UserConsumer>
                
                {  value=>{
                    const{id,totalPoint}=value;
                    return(
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-5 p-3" >
                        <div className="container ">
        
                           {/*  <div className="container">
                            <a className="text-light" href="#">Joker</a>
                            </div> */}
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
                  )}
                }
            </UserConsumer> 
            
        )
    }
}
export default Navbar;