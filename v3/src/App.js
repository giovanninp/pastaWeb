import React from 'react';
import logo from './logo.svg';
import './App.css';

import session from './models/session';
import user from './models/user'

import Topbar from './components/Topbar';
import Home from './containers/Home';
import Products from './containers/Products';
import Cart from './containers/Cart';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session:session,
      userState:user, 
    }
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  handleChangeContent(stateType,stateAttribute,value) {
    let actual = this.state[stateType];
    actual[stateAttribute] = value;
    this.setState({stateType:actual});
    console.log(this.state);
  }

  handleChangePage(event) {
    const { value } = event.target;
    this.handleChangeContent("session","currentPage",value);
    console.log(value);
  }
  
  screens = {
    home: (
      <Home />
    ),
    cart: (
      <Cart />
    ),
    products: (
      <Products />
    )
  }

  render () {
    return (
      <div>
        <Topbar
          handleChangePage={this.handleChangePage}
        />
        <div id="main-content">
          {
            this.screens[this.state.session.currentPage]
          }
        </div>
      </div>
    );
  }
}
