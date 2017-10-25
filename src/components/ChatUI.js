import React, { Component } from 'react';
import './ChatUI.css';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSend from 'material-ui/svg-icons/content/send';


class ChatUI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mockmessages: [
                {
                    sender: 1,
                    message: "Hei! Kiinnostaako teitä kaskelotin soidinmenot?",
                    timestamp: 1507713052607
                },
                {
                    sender: 0,
                    message: "Kyllä kiitos!",
                    timestamp: 1507713052609
                },
                {
                    sender: 1,
                    message: "Vittu sinä olet sairas ihmisperse.",
                    timestamp: 1507713052610
                }
            ],
            value: ''
        };
        //AJAX haku kantaan, jolla haetaan vanhat viestit
        //websocket Kutsutaan vasta kun ajax haku valmis
        //

        // let messages = [];

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

        const messageSender = (message) => {
            if (message.sender === 1) {
                return <div className="received-message">{message.message}</div>
            } else {
                return <div className="own-message">{message.message}</div>
            }
        };
        
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
            <div className="main-container">
                <div className="msgs-container">
                    
                    {this.state.mockmessages.map((msg, index) => (
                        <div className="msg-container">
                         {messageSender(msg)}
                         </div>
                    ))}

                </div >
                <div className="input-container">
                    <TextField hintText="Say Something" floatingLabelText="Floating Label Text" type="text" value={this.state.value} onChange={this.handleChange} />
                    <FloatingActionButton className="sendButton" onClick={this.handleSubmit}>
                        <ContentSend />
                    </FloatingActionButton>
                </div>
            </div>
        );
    }
}

export default ChatUI;
