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
      openChatId: null,
      isRoom: false,
      idValue: null
    };
    
  }

  chatClick(idRoom) {
    this.setState({ openChatId: idRoom.id, isRoom: idRoom.room });
    console.log(this.state);
    console.log(idRoom);
  }

  render() {

    return (
      <MuiThemeProvider>
        <Sidebar 
          callbackFromParent={this.myCallback}
          sideClick={this.chatClick.bind(this)} />

        <ChatUI 
          senderId={this.state.openChatId}
          isRoom={this.state.isRoom} />
      </MuiThemeProvider>
    );
  }
}

export default App;
