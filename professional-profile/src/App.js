import { Route, BrowserRouter as Router } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projectz from './pages/Projectz';
import React from 'react';

function App() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={AboutMe} />
                <Route exact path="/about" component={AboutMe} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/projectz" component={Projectz} />
            </div>
        </Router>
    );
}

export default App;
