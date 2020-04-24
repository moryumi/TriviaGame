import React, { Component } from 'react'
import {Link} from "react-router-dom";

class WrongAnswer extends Component {
    render() {
        return (
            <div>
                 <div className="container">
                    <img className="logo rounded mb-4" style={{width:150}}src={require("../images/wrong1.png")} alt="logo"/>
                    <p> GAME OVER </p>
                <Link to="/"><button type="button" className="btn btn-primary btn-lg mt-4" style={{width:350}}>START AGAIN</button></Link>
                 </div>
            </div>
        )
    }
}
export default WrongAnswer;
