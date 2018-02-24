import React from 'react';
import ReactDOM from 'react-dom';
import Grocery from './components/Grocery';
import ShoppingBag from './components/ShoppingBag';
import Stats from './components/Stats';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const store = createStore(rootReducer);

const App = () => (
  <div style={styles}>
  <div style={{backgroundColor:'#00D2D3', color:'#fff'}}>
    <h1 className="App-title">Shoppers Stop</h1>
    <h3>Welcome to the best shopping website</h3>
    </div>
  <div className="row m-3">
    <Grocery/>
    <ShoppingBag/>
    <Stats/>
    </div>
  </div>
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
