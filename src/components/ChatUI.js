import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './ChatUI.css';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import axios from 'axios';



class ChatUI extends Component {

    constructor(props) {
    
        super(props);    

        this.state = {
            ides: this.props.getIdValue,
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
        this.messagesEnd = null;
    }

    componentWillReceiveProps(nextProps) {
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
        var newArray = this.state.messages.slice();    
        newArray.push(
            {
                "sender": 4,
                "receiver": 1,
                "message": this.state.value,
                "timestamp": 1507713052607
            }
        );

        this.setState({ messages: newArray })
        this.setState({ value: '' })
    }

    scrollToBottom = () => {
        const node = ReactDOM.findDOMNode(this.messagesEnd);
        node.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {
        this.scrollToBottom();
        document.addEventListener('keypress', (event) => {
            if (event.keyCode === 13) {
                event.preventDefault();
                this.handleSubmit();
            }
        });
    }
      
    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        setTimeout(() => {
            console.log(this.props.getIdValue);
        }, 1500);
        
        const messageSender = (message) => {
            if (message.sender === 1) {
                return <div className="received-message">{message.message}</div>
            } else {
                return <div className="own-message">{message.message}</div>
            }
        };

        return (
            <div className="main-container">
                <div className="msgs-container">

                    {this.state.messages.map((msg, index) => (
                        <div className="msg-container">
                            { messageSender(msg) }
                        </div>
                    ))}

                    <div style={{ float:"left", clear: "both" }}
                        ref={(el) => { this.messagesEnd = el; }}>
                    </div>

                </div >
                <div className="input-container">
                        <TextField hintText="Say something" fullWidth={true} multiLine={true} floatingLabelText="Type your message here" type="text" value={this.state.value} onChange={this.handleChange} />
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
