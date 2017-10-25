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
    }

    render() {
        return (
            <div className="haloo-sidebar">
                <div className="sidebar-header">
                    Riku Wikman
                </div>
                <div className="message-preview">
                    <div className="message-preview-header">
                        Leevi Ojala
                    </div>
                    <div className="message-preview-text">
                        Äijä on kyllä ihan paras, ihan paras, ihan paras!
                    </div>
                </div>
                <div className="message-preview">
                    <div className="message-preview-header">
                        Santeri Remes
                    </div>
                    <div className="message-preview-text">
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