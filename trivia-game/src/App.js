import React from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomePage from './components/WelcomePage';
import Question from './components/Question';
import Questions from './components/Questions';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import CorrectAnswer from './components/CorrectAnswer';
import WrongAnswer from './components/WrongAnswer';


function App() {
  return (
   
     <Router>
      <div className="App">
   
        <Route exact path="/" component={WelcomePage}/>
        
        <Route exact path="/questions/:id" component={Questions}/>
        <Route exact path="/wronganswer" component={WrongAnswer}/>
        <Route exact path="/correctanswer" component={CorrectAnswer}/>
      </div>
    </Router> 
  );
}

export default App;
