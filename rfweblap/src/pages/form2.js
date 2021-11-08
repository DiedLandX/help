import React, { Component } from "react";
import "../styles/form2.css"



const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class App2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
     userName: null,
      
      
      password: null,
      formErrors: {
       userName: "",
        
        
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.userName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "userName":
        formErrors.userName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      
      
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Bejelentkezés</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="userName">
              <label htmlFor="userName">Felhasználónév:</label><br/>
              <input
                className={formErrors.userName.length > 0 ? "error" : null}
                placeholder="felhasznalónév"
                type="text"
                name="userName"
                noValidate
                onChange={this.handleChange}
              />
              <br/>
              {formErrors.userName.length > 0 && (
                <span className="errorMessage">{formErrors.userName}</span>
              )}
            </div>
            
            <div className="password">
              <label htmlFor="password">Jelszó:</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="jelszó"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Bejelentkezés</button>
              
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App2;
