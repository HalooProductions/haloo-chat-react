import React, { Component } from 'react';
import { ChatFeed, Message } from 'react-chat-ui';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSend from 'material-ui/svg-icons/content/send';


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      messages: [
        new Message({
          id: 1,
          message: "The person you're talking to",
          senderName: 'Evan',
        }), // Gray bubble
        new Message({ id: 0, message: "I'm you " }), // Blue bubble
      ],
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    /*this.state = {
      ,
    };*/
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state);
  }
  handleSubmit(event) {
    let msgs = this.state.messages;
    msgs.push(new Message({ id: 0, message: this.state.value }));
    this.setState({ message: msgs });
    this.setState({ value: "" });

    event.preventDefault();
  }

  render() {
    const divStyle = {
      maxWidth: '1200px',
      margin: 'auto',
    };

    const inputStyle = {
      position: 'fixed',
      bottom: '0',
      //width: '90%',
      margin: '0 5% 5% 5% '

    };

    return (
      <MuiThemeProvider>
        <div style={divStyle}>
        <TextField hintText="Say Something" floatingLabelText="Floating Label Text" type="text" value={this.state.value} onChange={this.handleChange} style={inputStyle} />
        <FloatingActionButton onClick={this.handleSubmit}>
          <ContentSend />
        </FloatingActionButton>
          <ChatFeed
            messages={this.state.messages} // Boolean: list of message objects
            isTyping={this.state.is_typing} // Boolean: is the recipient typing
            hasInputField={false} // Boolean: use our input, or use your own
            bubblesCentered={false} // Boolean should the bubbles be centered in the feed?
            // JSON: Custom bubble styles
            showSenderName
            bubbleStyles={{
              text: {
                fontSize: 25,
              },
              chatbubble: {
                borderRadius: 70,
                paddingLeft: 40,
                paddingRight: 40,
                paddingTop: 20,
                paddingBottom: 20,
              },
            }}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
