import React from "react";
import SideBar from "../SideBar";
import MessageInput from "../MessageInput";
import ChatLog from "../ChatLog";
import NavBar from "../NavBar";
import "./MainPage.css";


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userMessage: "",
      messages: []
    }
  }

updatingMessage(msg){
  this.setState({ userMessage: msg}) 
}

handleSend = message => {
  this.setState({
    messages: [...this.state.messages, message]
  });
}

  render() {
    return (
      <div id="mainPageDiv">
        <SideBar />
        <NavBar />
        <MessageInput onSend={this.handleSend} updateMessage={this.updatingMessage.bind(this)}/>
        <ChatLog messages={this.state.messages} receivedMessage={this.state.userMessage}/>
      </div>
    );
  }
}

export default MainPage;

//main page AKA "/home"
