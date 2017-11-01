import React, { Component } from 'react';
import './ChatUI.css';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import axios from 'axios';



class ChatUI extends Component {

    constructor(props) {
    
        super(props);

        

        this.state = {
            messages: [
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

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        axios.get("./mockdata/" + nextProps.senderId + ".json", { headers: { receiver: 1 } })
        .then(response => {
            console.log(response);
            this.setState({ messages: response.data });
        })
        .catch(error => {
            console.log(error);
        });
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        console.log(this.state);
    }

    handleSubmit(event) {
        let msgs = this.state.messages;
        this.setState({ messages: msgs });
        this.setState({ value: "" });
        var newArray = this.state.messages.slice();    
        newArray.push(
            {
                "sender": 4,
                "receiver": 1,
                "message": this.state.value,
                "timestamp": 1507713052607
            });   
        this.setState({messages: newArray})

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

                    {this.state.messages.map((msg, index) => (
                        <div className="msg-container">
                            {messageSender(msg)}
                        </div>
                    ))}

                </div >
                <div className="input-container">
                        <TextField hintText="Say Something" fullWidth="True" multiLine="True" floatingLabelText="Floating Label Text" type="text" value={this.state.value} onChange={this.handleChange} />
                    <div className ="sendButton">
                        <FloatingActionButton className="sendButton" onClick={this.handleSubmit}>
                            <ContentSend />
                        </FloatingActionButton>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatUI;
