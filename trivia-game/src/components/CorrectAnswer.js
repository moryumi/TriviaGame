import React, { Component } from 'react'
import {Link} from "react-router-dom";

class CorrectAnswer extends Component {
    render() {
        return (
            <div>
                CORRECT ANSWEEER:)
                <Link to="/question/1"><button type="button" className="btn btn-primary btn-lg mt-5" style={{width:350}}>Next Question</button></Link>
            </div>
        )
    }
}
export default CorrectAnswer;
