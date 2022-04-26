import React, { Component } from "react";
import ChatTopBar from "./ChatTopBar";
import ChatContent from "./ChatContent";
import ChatFooter from "./ChatFooter";
import ChatUtility from "./ChatUtility";

export default class ChatItem extends Component {
  render() {
    return (
      <div className="tab-pane fade show active" role="tabpanel" id="chat1">
        <div className="item">
          <div className="content">
            <ChatTopBar />
            <ChatContent />
            <ChatFooter />
          </div>
          <div className="utility">
            <ChatUtility />
          </div>
        </div>
      </div>
    );
  }
}
