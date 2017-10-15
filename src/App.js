import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Novel from './Novel';
import Webtoon from './Webtoon';
import PageError from './PageError';

import './App.css';

const App = () => {
    return (
        <Router>
          <div>
            <Header/>
            <div className="body">
              <Switch>
                <Route exact path="/" component={Novel}/>
                <Route path="/novel" component={Novel}/>
                <Route path="/webtoon" component={Webtoon}/>
                <Route component={PageError}/>
              </Switch>
            </div>
          </div>
        </Router>
    );
};

export default App;
