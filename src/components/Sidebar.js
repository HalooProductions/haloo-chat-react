import React, { Component } from 'react';
import './Sidebar.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import PersonOutline from 'material-ui/svg-icons/social/person-outline';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.chatClick = this.chatClick.bind(this);
        console.log(this);
    }

    chatClick(e) {
        this.props.sideClick(e.target.dataset.id);
    }

    render() {
        return (
            <div className="haloo-sidebar">
                <div className="sidebar-header">
                    Riku Wikman
                </div>
                <div className="message-preview" data-id={50} onClick={this.chatClick}>
                    <div className="message-preview-header" data-id={50}>
                        Leevi Ojala
                    </div>
                    <div className="message-preview-text" data-id={50}>
                        Äijä on kyllä ihan paras, ihan paras, ihan paras!
                    </div>
                </div>
                <div className="message-preview" data-id={40} onClick={this.chatClick}>
                    <div className="message-preview-header" data-id={40}>
                        Santeri Remes
                    </div>
                    <div className="message-preview-text" data-id={40}>
                        Se on GG.
                    </div>
                </div>
                <div className="message-preview">
                    <div className="message-preview-header">
                        Kullihiiri
                    </div>
                    <div className="message-preview-text">
                        Eemeli: Lähteekö kukaan leffaan tänään?
                    </div>
                </div>
                <div className="message-preview">
                    <div className="message-preview-header">
                        Leevi Ojala
                    </div>
                    <div className="message-preview-text">
                        Äijä on kyllä ihan paras, ihan paras, ihan paras!
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;