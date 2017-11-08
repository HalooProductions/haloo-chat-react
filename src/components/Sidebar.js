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
        
    }

    myColor(position) {
        if (this.state.active === position) {
            return "#1ae4ff";
        }
        return "";
    }

    toggle(id, pos) {
        if (this.state.active !== pos) {
            this.setState({ active: pos });
            this.props.sideClick(id);
        }
    }

    render() {
        return (
            <div className="haloo-sidebar">
                <div className="sidebar-header">
                    Riku Wikman
                </div>
                <div className="message-preview" style={{ background: this.myColor(0) }} onClick={() => { this.toggle(50, 0) }}>
                    <div className="message-preview-header" style={{ background: this.myColor(0) }} onClick={() => { this.toggle(50, 0) }}>
                        Leevi Ojala
                    </div>
                    <div className="message-preview-text" style={{ background: this.myColor(0) }} onClick={() => { this.toggle(50, 0) }}>
                        Äijä on kyllä ihan paras, ihan paras, ihan paras!
                    </div>
                </div>
                <div className="message-preview" style={{ background: this.myColor(1) }} onClick={() => { this.toggle(40, 1) }}>
                    <div className="message-preview-header" style={{ background: this.myColor(1) }} onClick={() => { this.toggle(40, 1) }}>
                        Santeri Remes
                    </div>
                    <div className="message-preview-text" style={{ background: this.myColor(1) }} onClick={() => { this.toggle(40, 1) }}>
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