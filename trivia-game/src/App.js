import React from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomePage from './components/WelcomePage';
import Questions from './components/Questions';
import TimesUp from './components/TimesUp';
import {BrowserRouter as Router, Route} from "react-router-dom";
import CorrectAnswer from './components/CorrectAnswer';
import WrongAnswer from './components/WrongAnswer';


function App() {
  return (
   
     <Router>
      <div className="App">
        <Route exact path="/" component={WelcomePage}/>
        
        <Route exact path="/questions/:id" component={Questions}/>
        <Route exact path="/timesup" component={TimesUp}/>
        <Route exact path="/wronganswer" component={WrongAnswer}/>
        <Route exact path="/correctanswer" component={CorrectAnswer}/>
      </div>
    </Router> 
  );
}

export default App;
