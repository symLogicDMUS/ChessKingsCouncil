import React from "react";
import "./PickName.css";

export class PickName extends React.Component {

  constructor(props) {
    super(props)
    this.state = {userInput: ''}
    this.handleUserInput = this.handleUserInput.bind(this);
    this.setName = this.setName.bind(this)
  }

  handleUserInput(e) {
    this.setState({ userInput: e.target.value}) 
  }

  setName() {
      this.props.setName(this.state.userInput)
  }

  render() {
    return (
        <div class="div">
          <img src="/Images/enter-name.svg" className="components" alt="title to enter name" />
          <form onSubmit={this.setName}>
            <input type="text" id="gname" value={this.state.userInput} onChange={this.handleUserInput} className="components"/>
            <input type="submit" value="Submit" className="components"/>
          </form>
        </div>
    );
  }
}
