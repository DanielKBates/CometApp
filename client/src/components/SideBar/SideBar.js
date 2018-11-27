import React from "react";
import "./SideBar.css";
import { Modal, Button, Input } from "react-materialize";
import DirectMessage from "../DirectMessage";
import GroupMessage from "../GroupMessage";
// import API from "../../utils/userAPI";

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameList: ["Bob", "Mark", "Steve", "Jack", "Bill", "Rick", "Some-Guy"],
      channels: [],
      users: [],
      chosenUser: null,
      userInGroup: null,
      directMessageLoaded: true,
      groupMessageLoaded: true
    };
  }

  // componentDidMount() {
  //   this.loadUsers();
  // }

  // loadUsers = () => {
  //   API.getUsers()
  //     .then(res => {
  //       console.log("line 27: " + res);
  //       this.setState({ users: res.data });
  //     })
  //     .catch(err => console.log(err));
  //   console.log("users*: " + this.state.users);
  // };

  // // First get method that uses the backend api to fetch data from the database
  // getDataFromDb = () => {
  //   fetch("/api/getData")
  //     .then(data => data.json())
  //     .then(res => this.setState({ data: res.data }))
  // };

  handleDropdownChange = event => {
    console.log("----new console log----");
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleStartMessage = () => {
    const { chosenUser } = this.state;
    if (!chosenUser) {
      return console.log("No user chosen.");
    }

    if (!this.state.users.includes(chosenUser)) {
      this.setState({
        users: [...this.state.users, chosenUser]
      });
    }
  };

  handleGroupMessage = () => {
    const { userInGroup } = this.state;
    if (!userInGroup) {
      return console.log("No channel chosen.");
    }

    if (!this.state.channels.includes(userInGroup)) {
      this.setState({
        channels: [...this.state.channels, userInGroup]
      });
    }
  };

  render() {
    return (
      <div id="mainRow" className="card col s4 m2 l2">
        {/* DIRECT MSG MODAL */}
        <Modal
          header="Start A New Message With:"
          className="modal"
          trigger={
            <Button className="directMessageBtn btn waves-effect waves-light grey darken-2">
              <img
                className="messageIcon"
                src="../../../images/directMessageIcon.png"
                alt="create direct message"
              />
            </Button>
          }
        >
          {" "}
          <Input
            name="chosenUser"
            s={12}
            type="select"
            onChange={this.handleDropdownChange}
            className="modalDrop"
          >
            {this.state.nameList.length
              ? this.state.nameList.map((person, index) => (
                  <option value={person} key={person}>
                    {person}
                  </option>
                ))
              : "Nope"}
          </Input>
          <button
            onClick={this.handleStartMessage}
            className="btn waves-effect waves-light light-blue lighten-2 modalStartMsg modal-action modal-close"
          >
            Start Message
          </button>
        </Modal>

        {/* Group Message Modal */}
        <Modal
          header="Start A Group Message with:"
          className="modal"
          trigger={
            <Button className="groupMessageBtn btn waves-effect waves-light grey darken-2">
              <img
                className="messageIcon"
                src="../../../images/groupMessageIcon.png"
                alt="create group message"
              />
            </Button>
          }
        >
          {" "}
          <Input
            name="userInGroup"
            s={12}
            type="text"
            onChange={this.handleDropdownChange}
            className="modalDrop"
          >
          </Input>
          <button
            onClick={this.handleGroupMessage}
            className="btn waves-effect waves-light light-blue lighten-2 modalStartMsg modal-action modal-close"
          >
            Start Message
          </button>
        </Modal>

        <h5 className="groupMessagesHeader">Group Messages</h5>
        <div className="groupMessageDiv">
          {this.state.groupMessageLoaded
            ? this.state.channels.length
              ? this.state.channels.map((channel, index) => (
                  <GroupMessage key={channel} user={channel} channelNumber={index + 1} />
                ))
              : null
            : null}
        </div>

        <h5 className="directMessages">Direct Messages</h5>
        <div className="directMessageDiv">
          {this.state.directMessageLoaded
            ? this.state.users.length
              ? this.state.users.map((dmUser, index) => (
                  <DirectMessage key={dmUser} user={dmUser} />
                ))
              : null
            : null}
        </div>
      </div>
    );
  }
}

export default SideBar;
