import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import ChatUI from './components/ChatUI';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {


  constructor(props) {
    super(props);
  }  

  render() {

    return (
      <MuiThemeProvider>
        <Sidebar />
        <ChatUI />
      </MuiThemeProvider>
    );
  }
}

export default App;
