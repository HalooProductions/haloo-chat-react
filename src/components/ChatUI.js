import React, { Component } from 'react';
import './ChatUI.css';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSend from 'material-ui/svg-icons/content/send';


class ChatUI extends Component {


  constructor(props) {
    super(props);
    this.state = {
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
        <div>
            <div>

            </div>
            <div style={divStyle}>
                <TextField hintText="Say Something" floatingLabelText="Floating Label Text" type="text" value={this.state.value} onChange={this.handleChange} style={inputStyle} />
                <FloatingActionButton onClick={this.handleSubmit}>
                    <ContentSend />
                </FloatingActionButton>
            </div>
        </div>
    );
  }
}

export default ChatUI;
