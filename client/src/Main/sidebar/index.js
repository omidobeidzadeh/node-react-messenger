import React, { Component } from "react";
import Conversation from "./Conversation";
import Friends from "./Friends";
import Notifications from "./Notifications";
import Setting from "./Setting";

export default class index extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="container">
          <div className="tab-content">
            <Conversation />

            <Friends />

            <Notifications />

            <Setting />
          </div>
        </div>
      </div>
    );
  }
}
