import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App'
import Feed from './pages/feed'
import Posts from './components/Posts'
import UI from './components/UI'




ReactDOM.render(
  <BrowserRouter>
  <Switch>
    {/* <UI/> */}
    <Route path="/" component={Feed}/>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


