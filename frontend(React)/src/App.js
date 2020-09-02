import React from 'react';
import Home from './components/home.js'
import Market from './components/market.js';
import Navbars from './components/navbar.js';
import Login from './components/login.js';
import Register from './components/register.js';
import FeedBack from './components/feedback.js';
import Mypage from './components/mypage.js';
import Ranking from './components/ranking.js';
import MarketDetail from './components/market-detail.js';
import New from './components/New';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <Router>
      <div>
        <Navbars/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/market" component={Market}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/feedback" component={FeedBack}/>
          <Route exact path="/mypage" component={Mypage}/>
          <Route exact path="/ranking" component={Ranking}/>
          <Route exact path="/market-detail" component={MarketDetail}/>
          <Route exact path="/new" component={New}/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
