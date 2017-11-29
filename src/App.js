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
      idValue: null
    };
    
  }


  chatClick(id) {
    this.setState({ openChatId: id });
  }
  myCallback = (childData) => {
    setTimeout(()=> {
      this.setState({idValue: childData});
      console.log(childData);
      console.log(this.state.idValue);
    }, 500);
    
  }

  render() {

    return (
      <MuiThemeProvider>
        <Sidebar 
          callbackFromParent={this.myCallback}
          sideClick={this.chatClick.bind(this)} />

        <ChatUI 
          senderId={this.state.openChatId}
          getIdValue={this.state.idValue} />
      </MuiThemeProvider>
    );
  }
}

export default App;
