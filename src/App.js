import React, { Component } from 'react';
import { ChatFeed, Message } from 'react-chat-ui';
import logo from './logo.svg';
import './App.css';


class App extends Component {


  constructor(props) {
    super(props);
    this.state = { value: 'asdfghyjukiloöä' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      messages: [
        new Message({
          id: 1,
          message: "The person you're talking to",
          senderName: 'Evan',
        }), // Gray bubble
        new Message({ id: 0, message: "I'm you " }), // Blue bubble
      ],
    };
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    this.state.messages.push(new Message({id: 0, message: 'homo'}));


    event.preventDefault();
  }

  render() {
    const divStyle = {
      maxWidth: '1200px',
      margin: 'auto',
    };

    return (

      <div style={divStyle}>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Send" />
        </form>
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
    );
  }
}

export default App;
