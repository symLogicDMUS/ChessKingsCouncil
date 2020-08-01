import React from "react";
import {NavBar} from "../../NavBar/NavBarRegular3";
import "./PickName.css";

export class PickName extends React.Component {

  constructor(props) {
    super(props)
    this.state = {userInput: '', bValue: true};
    this.navExpanded = true;
    this.handleUserInput = this.handleUserInput.bind(this);
    this.setName = this.setName.bind(this);
  }

  componentDidMount() {
    document.body.className="pick-name-body";
  }

  handleUserInput(e) {
    this.setState({ userInput: e.target.value}) 
  }

  setName() {
      this.props.setName(this.state.userInput);
      this.props.nextStep();
  }

  render() {
    return (
        <>
          <NavBar navBarPos="relative" navBarPosTop={0} navBarPosLeft="22.2vw" expandColapseColor="000000"/>
          <div class="div">
            <img src="/Images/enter-name.svg" className="components" alt="title to enter name" />
            <form onSubmit={this.setName}>
              <input type="text" id="gname" value={this.state.userInput} onChange={this.handleUserInput} className="components"/>
              <input type="submit" value="Submit" className="components"/>
            </form>
          </div>
        </>
    );
  }
}
