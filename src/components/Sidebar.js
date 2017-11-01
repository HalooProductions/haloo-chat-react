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

    myColor(position) {
        if (this.state.active === position) {
            return "rgba(0, 188, 212,0.8)";
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



    render() {
        return (
            <div className="haloo-sidebar">
                <div className="sidebar-header">
                    Riku Wikman
                </div>
                <div className="message-preview" style={{ background: this.myColor(0) }} onClick={() => { this.toggle(0) }} data-id={50} onClick={this.chatClick}>
                    <div className="message-preview-header" style={{ background: this.myColor(0) }} onClick={() => { this.toggle(0) }} data-id={50}>
                        Leevi Ojala
                    </div>
                    <div className="message-preview-text" style={{ background: this.myColor(0) }} onClick={() => { this.toggle(0) }} data-id={50}>
                        Äijä on kyllä ihan paras, ihan paras, ihan paras!
                    </div>
                </div>
                <div className="message-preview" style={{ background: this.myColor(1) }} onClick={() => { this.toggle(1) }} data-id={40} onClick={this.chatClick}>
                    <div className="message-preview-header" style={{ background: this.myColor(1) }} onClick={() => { this.toggle(1) }} data-id={40}>
                        Santeri Remes
                    </div>
                    <div className="message-preview-text" style={{ background: this.myColor(1) }} onClick={() => { this.toggle(1) }} data-id={40}>
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