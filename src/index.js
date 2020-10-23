import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Feed from './pages/feed'
// import Posts from './components/Posts'
// import UI from './components/UI'

//Redux
import { Provider } from 'react-redux'

//Store
import store from './redux/store'



ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <Switch>
    {/* <UI/> */}
    <Route path="/" component={Feed}/>
  </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


