import React from "react";
import "./MessageInput.css";
import io from "socket.io-client";
var serverURI = process.env.REACT_APP_SERVER;
var socket = io(serverURI);
// import moment from "moment"




class MessageInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      messageSent: false,
      messages: []
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    socket.on("RECEIVE_MESSAGE", (data) => {
      console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
      console.log(this.state.messages)

    })

  };

  sendMethod = event => {
    event.preventDefault();

    const newMessage = {
      timestamp: Date.now(),
      from: "User",
      text: this.state.message
    };
    this.props.onSend(newMessage)
    this.setState({ message: "" })

    socket.emit("SEND_MESSAGE", this.state.message);



  };

  // handleSend = () => {
  //   this.props.onSend({
  //     timestamp: Date.now(),
  //     from: "Jeff",
  //     message: this.state.message
  //   })
  // }
  render() {
    return (
      <div className="MessageInput" id="footer">

        <div className="messageInputDiv card col s12 m12 l12">
          <div className="secondaryRow2 row valign-wrapper">
            <i className="material-icons prefix pencil">mode_edit</i>
            <div className="messageContent card col s10 m10 l10 center-align">
              <form className="textInput">
                <input className="typeMessage"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                  placeholder="Please type your message here"
                  type="text"
                  name="message"
                />
              </form>
            </div>
            <div className="row col s2 m2 l2">
              <a className="push_button blue" type="submit" onClick={this.sendMethod}>Send</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MessageInput;
