import React from "react";
import "./ChatLog.css";
import MessageContent from "../MessageContent";
const ChatLog = (props) => (
  <div className="card chatLog">
    <div className="messageDiv card-body">
      <ul className="messageContentInChat">
        {props.messages.length
          ? props.messages.map(message => (
            <MessageContent
              key={message.timestamp}
              timestamp={message.timestamp}
              from={message.from}
              text={message.text}
            />
          ))
          : <h5 className="emptyChatlogMessage center-align">Type a message and send it!</h5>}
      </ul>
    </div>
  </div>
);

export default ChatLog;
