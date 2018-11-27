// import React from "react";

// class SignUp extends React.Component {
//     state = {
//         firstName: "",
//         lastName: "",
//         userName: "",
//         password: "",
//         email: ""
//     }

//     // handleInputChange = event => {
//     //     this.setState({
//     //         [name]: value
//     //     });
//     // };

//     handleFormSubmit = event => {
//         event.preventDefault();
//         if (!this.state.firstName || !this.state.lastName) {
//             alert("Please enter a first and last name.")
//         } else if (this.state.password.length < 6) {
//             alert(`Please choose a more secure password ${this.state.firstName}${this.state.lastName}`);
//         } else {
//             alert(`Hello ${this.state.firstName}${this.state.lastName}`)
//         }
//     }


//     render() {
//         return (
//             <div>
//                 <div class="row">
//                     <div class="col s12 center-align">
//                         <h2>Comet</h2>
//                     </div>
//                 </div>
//                 <div class="row">
//                     <div class="col s1"></div>
//                     <form class="col s10">
//                         <div class="row">
//                             <div class="input-field col s6 m6 l6">
//                                 <input id="firstNameSignUp" type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} class="validate" />
//                                 <label for="firstNameSignUp">First Name</label>
//                             </div>
//                             <div class="input-field col s6 m6 l6 ">
//                                 <input id="lastNameSignUp" type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} class="validate" />
//                                 <label for="lastNameSignUp">Last Name</label>
//                             </div>
//                         </div>
//                         <div class="row">
//                             <div class="input-field col s12">
//                                 <input id="usernameSignUp" type="text" name="userName" value={this.state.userName} onChange={this.handleInputChange} class="validate" />
//                                 <label for="usernameSignUp">Username</label>
//                             </div>
//                         </div>
//                         <div class="row">
//                             <div class="input-field col s12">
//                                 <input id="passwordSignUp" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} lass="validate" />
//                                 <label for="passwordSignUp">Password</label>
//                             </div>
//                         </div>
//                         <div class="row">
//                             <div class="input-field col s12">
//                                 <input id="emailSignUp" type="text" name="email" value={this.state.email} onChange={this.handleInputChange} class="validate" />
//                                 <label for="emailSignUp">Email</label>
//                             </div>
//                         </div>
//                     </form>
//                     <div class="col s12 center-align">
//                         <button class="btn waves-effect waves-light" id="signUpBttnComplete" type="submit" onClick={this.handleFormSubmit} name="action">Sign
//                             Up</button>
//                     </div>
//                     <div class="col s1"></div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default SignUp;   

import React from "react";

class SignUp extends React.Component {
    state = {
        // firstName: "",
        // lastName: "",
        userName: "",
        password: "",
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }


    // handleInputChange = event => {
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (!this.state.firstName || !this.state.lastName) {
    //         alert("Please enter a first and last name.")
    //     } else if (this.state.password.length < 6) {
    //         alert(`Please choose a more secure password ${this.state.firstName}${this.state.lastName}`);
    //     } else {
    //         alert(`Hello ${this.state.firstName}${this.state.lastName}`)
    //     }
    // }


    render() {
        return (
            <div>

                <h2>Comet</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="userName" placeholder="UserName" onChange={this.handleInputChange} />
                    <input type="password" name="password" placeholder="Password" onChange={this.handleInputChange} />
                    <button>Login</button>
                </form>


                Click to expand inline (6 lines)
            </div>
        )
    }
}

export default SignUp;