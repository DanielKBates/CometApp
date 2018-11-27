import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
// import NoMatch from "./pages/NoMatch";
// import Wrapper from "./components/Wrapper";
// import SignUp from "./components/SignUp";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import Authentication from './components/Authentication';
import Auth from './utils/auth'
// import axios from "axios"
import "./index.css";

class App extends React.Component {
  state = {
    token: Auth.getToken()
  }

  componentDidMount() {
    Auth.onAuthChange(this.handleAuthChange);
  }

  handleAuthChange = token => {
    this.setState({
      token
    });
  }


  // OG part of this component
  render() {
    return (
      <BrowserRouter>
      <div className="everythingDiv">
        <header>
          <Authentication token={this.state.token} />
        </header>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/login" render={() => <Login token={this.state.token} />} />
        <PrivateRoute path="/dashboard" component={MainPage} token={this.state.token} />
      </div>

      </BrowserRouter>
    );
  }
}

const PrivateRoute = ({ component: Component, token, ...rest }) => (
  <Route {...rest} render={props => (
    token ? (
      <Component {...props} token={token} />
    ) : (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
      )
  )} />
);

export default App;





// state = {
  //   data: [],
  //   id: 0,
  //   message: null,
  //   intervalIsSet: false,
  //   idToDelete: null
  // };

  // // when component mounts, fetch all existing data in DB
  // componentDidMount() {
  //   this.getDataFromDb();
  // };

  // // First get method that uses the backend api to fetch data from the database
  // getDataFromDb = () => {
  //   fetch("/api/getData")
  //     .then(data => data.json())
  //     .then(res => this.setState({ data: res.data }))
  // };

  // // Put method that uses the API to create new query into our DB
  // putDataToDb = message => {
  //   let currentIds = this.state.data.map(data => data.id);
  //   let idToBeAdded = 0;
  //   while (currentIds.includes(idToBeAdded)) {
  //     ++idToBeAdded;
  //   }

  //   axios.post("/api/putData", {
  //     id: idToBeAdded,
  //     message: message
  //   });
  // };

  // // Delete Method to remove existing db info
  // deleteFromDb = idToDelete => {
  //   let objIdToDelete = null;
  //   this.state.data.forEach(dat => {
  //     if (dat.id === idToDelete) {
  //       objIdToDelete = dat._id;
  //     }
  //   });

  //   axios.delete("/api/deleteData", {
  //     data: {
  //       id: objIdToDelete
  //     }
  //   });
  // };