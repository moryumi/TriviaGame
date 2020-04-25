import React, { Component } from 'react'
import UserConsumer from '../context';
import Timer from './Timer';


function Navbar() {
    
    return (
        <UserConsumer>
            {  value=>{
                const{id,totalPoint,isCorrect}=value;
                
                return(
                   
                    <div className="container ">
                         <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-4 p-3" >
                     
                        <div className="container ">
                            <div className="container">
                                <a className="text-light">Question {id+1} / 10</a>
                            </div>
                        {isCorrect? null : [<div className="container">
                                <a className="text-light">{totalPoint} Points </a>
                            </div>,
                            <div className="container">
                                <a className="text-light">Remaining Time <Timer/> </a>
                            </div>]
                            }

                            
                        </div>
                       </nav> 
                       
                    </div>
                       
              )}
            }
        </UserConsumer> 
        
    )
}
export default Navbar;