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
            senderId: '',
            conversations: [],
            messages: [
           ],
            value: '',
            senderId:''
        };
        

        //AJAX haku kantaan, jolla haetaan vanhat viestit
        //websocket Kutsutaan vasta kun ajax haku valmis
        //

        // let messages = [];

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.messagesEnd = null;
        this.connection = new WebSocket("ws://" + document.location.host + "/ws");
        this.connection.onmessage = message => {
            console.log(message);
            let jsonData = JSON.parse(message.data);
            console.log(jsonData);
            var newArray = this.state.conversations.slice();    
            newArray.push(jsonData);
    
            this.setState({ conversations: newArray });
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     axios.get("./mockdata/" + nextProps.senderId + ".json", { headers: { receiver: 1 } })
    //     .then(response => {
    //         console.log(response);
    //         this.setState({ messages: response.data });
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // }

    handleChange(event) {
        this.setState({ value: event.target.value });
        console.log(this.state);
    }

    handleSubmit(event) {
        var newArray = this.state.conversations.slice();    
        newArray.push(
            {
                "sender": 304865346313289729,
                "receiver": 1,
                "message": this.state.value,
                "timestamp": Date.now()
            }
        );

        this.setState({ conversations: newArray });
        let obj = {
            sender: "304865346313289729",
            receiver: this.state.senderId,
            message: this.state.value,
            timestamp: Date.now()
        };

        this.connection.send(JSON.stringify(obj));
        this.setState({ value: '' });
    }

    scrollToBottom = () => {
        // const node = ReactDOM.findDOMNode(this.messagesEnd);
        // node.scrollIntoView({ behavior: "smooth" });
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

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({
            senderId: nextProps.senderId
        });

        this.getConversations(nextProps.senderId, nextProps.isRoom);
    }

    getConversations(senderId, room) {
        let url = '';
        if (room === 'true') {
            url = '/chatlog?room_id=' + senderId;
        } else {
            url = '/chatlog?user_id=304865346313289729&receiver_id=' + senderId;
        }
        console.log(url);
        this.setState({
            senderId: senderId
        });

        axios.get(url)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    conversations: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    messageSender(message) {
        if (message.sender === '304865346313289729') {
            return <div className="own-message">{message.message}</div>    
        } else {
            return <div className="received-message">{message.message}</div>
        }
    }

    render() {

        return (
            <div className="main-container">
                {this.state.conversations.map((conversation, i) => {
                    return ([
                        <div className="msgs-container">
                            <div className="msg-container">
                                    {this.messageSender(conversation)}
                                </div>
                            <div style={{ float: "left", clear: "both" }}
                                ref={(el) => { this.messagesEnd = el; }}>
                            </div>

                        </div >
                    ]);
                })}

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
