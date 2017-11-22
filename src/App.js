import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import ChatUI from './components/ChatUI';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      openChatId: null
    };
  }


  chatClick(id) {
    this.setState({ openChatId: id });
  }

  render() {

    return (
      <MuiThemeProvider>
        <Sidebar sideClick={this.chatClick.bind(this)} />
        <ChatUI senderId={this.state.openChatId} />
      </MuiThemeProvider>
    );
  }
}

export default App;
