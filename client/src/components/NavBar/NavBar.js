import React from "react";
import "./NavBar.css";
import Clock from 'react-live-clock';
import Auth from "../../utils/auth"
// import Authentication from "../Authentication"


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURL: "../public/images/Background_08.mov"
    }
  };

  render() {
    return (
      <nav className="nav-extended header">
        <div className="nav-wrapper">
        <span className="comet">Comet</span>
          <Clock className="clock" format={'dddd, h:mm:ss A'} ticking={true} timezone={'US/Eastern'} />
          <button className="logoutBtn" onClick={Auth.logout}>Log Out</button>
          <br />
        </div>
        <div className="nav-content">
        </div>
      </nav>
    )
  }
};

export default NavBar;