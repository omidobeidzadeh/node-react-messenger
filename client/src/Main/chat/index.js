import React, { Component } from "react";
import ChatItem from "./ChatItem";

export default class index extends Component {
  render() {
    return (
      <div className="chat">
        <div className="tab-content">
          <ChatItem />
        </div>
      </div>
    );
  }
}
