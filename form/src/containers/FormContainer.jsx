import React, { Component } from "react";

/* Import Components */
import Input from "../components/Input.jsx";
import TextArea from "../components/TextArea.jsx";
import Button from "../components/Button.jsx";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        email: "",
        about: ""
      },

    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    //this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

 handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleEmail(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          email: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }



  /*handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }
  */

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          about: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }


  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch("https://formcarry.com/s/79D4V9NBj_0", {
      method: "POST",
      body: JSON.stringify(userData),        //!!!!!!!тут в 12 стоит Local Storage, так что возможно придется переделать
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json()
      .then(data => {
        console.log("Successful" + data)
        
      });
    });



  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        email: "",
        about: ""
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          name={"name"}
          title={"Full Name"}
          value={this.state.newUser.name}
          placeholder={"Enter your name"}
          handleChange={this.handleFullName}
        />{" "}
        {/* Name of the user */}
        <Input
          inputType={"text"}
          name={"email"}
          title={"Email"}
          value={this.state.newUser.email}
          placeholder={"Enter your email"}
          handleChange={this.handleEmail}
        />{" "}
        {/* Email */}
        <TextArea
          title={"Your comment"}
          rows={10}
          value={this.state.newUser.about}
          name={"currentPetInfo"}
          handleChange={this.handleTextArea}
          placeholder={"Write comment..."}
        />
        {/* About you */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
