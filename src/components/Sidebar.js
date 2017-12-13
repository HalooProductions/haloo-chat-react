import React, { Component } from 'react';
import './Sidebar.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import PersonOutline from 'material-ui/svg-icons/social/person-outline';
import axios from 'axios';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resData: '',
            value: '',
            roomsConversations: []
        };

        this.chatClick = this.chatClick.bind(this);
        this.getChats();        
    }

    chatClick(e) {
        console.log(e);
        console.log(e.target.dataset);
        this.props.sideClick({
            id: e.target.dataset.id,
            room: e.target.dataset.room
        });
    }

    myColor(position) {
        if (this.state.active === position) {
            return "#1ae4ff";
        }
        return "";
    }

    toggle(position) {
        if (this.state.active === position) {
            this.setState({ active: null })
        } else {
            this.setState({ active: position });
        }
        
    }

    getChats() {
        axios.get('/conversations?user_id=305021048621072385')
            .then((response) => {
                console.log(response.data);
                let data = [];
                let rooms = response.data.rooms;
                let conversations = response.data.conversations;
                this.setState({resData: conversations[0].ID});
                
                if (rooms !== null) {
                    data.push.apply(data, rooms);
                    window.rooms = rooms.id;
                }

                if (conversations !== null) {
                    data.push.apply(data, conversations)
                }

                this.setState({ roomsConversations: data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="haloo-sidebar">
                <div className="sidebar-header">
                    Riku Wikman
                </div>
                {this.state.roomsConversations.map((conversation, i) => {
                    let isRoom = typeof conversation.Room_ID === 'undefined' ? false : true;
                    let localId = typeof conversation.Room_ID === 'undefined' ? conversation.ID : conversation.Room_ID;
                    return ([
                        <div className="message-preview" style={{ background: this.myColor(localId) }} onClick={() => { this.toggle(localId) }} data-room={isRoom} data-id={localId} onClick={this.chatClick}>
                            <div className="message-preview-header" style={{ background: this.myColor(localId) }} onClick={() => { this.toggle(localId) }} data-room={isRoom} data-id={localId}>
                                {conversation.Name}
                            </div>
                            <div className="message-preview-text" style={{ background: this.myColor(localId) }} onClick={() => { this.toggle(localId) }} data-room={isRoom} data-id={localId}>
                                ...
                            </div>
                        </div>
                    ]);
                })}


            </div>
        );
    }
}

export default Sidebar;