import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        const{questionId}=this.props;
        return (
            
            <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark mb-5 p-3" >
                <div className="container ">

                    <div className="container">
                    <a className="text-light" href="#">Joker</a>
                    </div>
                    <div className="container">
                         <a className="text-light">Question {questionId}/10</a>
                    </div>
                    <div className="container">
                        <a className="text-light">Points </a>
                    </div>
                    <div className="container">
                        <a className="text-light">Remaining Time </a>
                    </div>
                    
                </div>
                   
                  
                </nav>
          
        )
    }
}
export default Navbar;