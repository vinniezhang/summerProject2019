import React from 'react';
import SideNav from './Components/SideNav';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeText from './Components/Home';
import ContactText from './Contact';
import Start from './GettingStarted/GettingStarted';
import Results from './Results/Results';

function App() {
    return (
        <Router>
            <SideNav/>
            <div className="App">
                <Route exact path = '/' component={HomeText}/>
                <Route path='/Contact' component={ContactText}/>
                <Route path='/Results' component={Results}/>
                <Route path='/GettingStarted' component={Start}/>
            </div>
        </Router>
    )
}

export default App;