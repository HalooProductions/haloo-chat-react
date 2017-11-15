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
            value: '',
            roomsConversations: []
        };

        this.chatClick = this.chatClick.bind(this);
        this.getChats();
        console.log(this);
    }

    chatClick(e) {
        this.props.sideClick(e.target.dataset.id);
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
            this.setState({ active: position })
        }
    }

    getChats() {
        axios.get('/conversations?user_id=297116670178000897')
            .then((response) => {
                console.log(response.data);
                let data = [];
                let rooms = response.data.rooms;
                let conversations = response.data.conversations;
                if (rooms !== null) {
                    data.push.apply(data, rooms);
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
                {this.state.roomsConversations.map((room, i) => {
                    return ([
                        <div className="message-preview" style={{ background: this.myColor(0) }} onClick={() => { this.toggle(0) }} data-id={50} onClick={this.chatClick}>
                            <div className="message-preview-header" style={{ background: this.myColor(0) }} onClick={() => { this.toggle(0) }} data-id={50}>
                                {room.Name}
                            </div>
                            <div className="message-preview-text" style={{ background: this.myColor(0) }} onClick={() => { this.toggle(0) }} data-id={50}>
                                Äijä on kyllä ihan paras, ihan paras, ihan paras!
                            </div>
                        </div>
                    ]);
                })}


            </div>
        );
    }
}

export default Sidebar;