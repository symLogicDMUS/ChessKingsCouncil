import React from "react";
import {NavBar} from "../../NavBar/NavBarRegular3";
import {HelpModal} from "../../Help/HelpModal";
import {InvalidGameName} from "./InvalidGameName";
import {getNameStatus} from "../../helpers/getNameStatus";
import "./PickName.css";

export class PickName extends React.Component {

  constructor(props) {
    super(props)
    this.state = {userInput: '', bValue: true, nameStatus:"none", isHelpModal:false};
    this.navExpanded = true;
    this.helpTitle = null;
    this.helpText = null;
    this.hmChildName = null;
    this.handleUserInput = this.handleUserInput.bind(this);
    this.setName = this.setName.bind(this);
    this.setNameStatus = this.setNameStatus.bind(this);
    this.reset = this.reset.bind(this);
    this.setHelpText = this.setHelpText.bind(this);
    this.togleHelpModal = this.togleHelpModal.bind(this);
  }

  componentDidMount() {
    document.body.className="pick-name-body";
  }

  handleUserInput(e) {
    this.setState({ userInput: e.target.value}) 
  }

  setNameStatus() {
    this.setState({nameStatus: getNameStatus(this.state.userInput)});
  }

  reset() {
    this.setState({nameStatus: null})
  }

  setName() {
      this.props.setName(this.state.userInput);
      this.props.nextStep();
  }

  togleHelpModal(boolVal) {
    this.setState({isHelpModal: boolVal})
  }

  setHelpText(helpTitle, helpText, hmChildName) {
    this.helpTitle = helpTitle;
    this.helpText = helpText;
    this.hmChildName = hmChildName;
  }

  render() {
    return (
        <>
          <NavBar currentPage="/NewGame" 
                  setHelpText={this.setHelpText} 
                  togleHelpModal={this.togleHelpModal} 
                  navBarPos="relative" navBarPosTop={0} 
                  navBarPosLeft="22.2vw" 
                  expandColapseColor="000000" />
          <div class="enter-game-name">
            <img src="/Images/enter-name.svg" className="game-name-form" alt="title to enter name" />
              <input type="text" id="gname" value={this.state.userInput} onChange={this.handleUserInput} className="game-name-form"/>
              <button className="game-name-accept-button" onClick={this.setNameStatus}>
                Submit
              </button>
          </div>
          {this.state.isHelpModal && (<HelpModal helpTitle={this.helpTitle}
                                                 helpText={this.helpText}
                                                 hmChildName={this.hmChildName}
                                                 extraModal={null}
                                                 togleHelpModal={this.togleHelpModal}/>)}
          {this.state.nameStatus === "blank" && (<InvalidGameName header="You can't leave the name of a game blank" reset={this.reset} />)}
          {this.state.nameStatus === "invalid-character" && (<InvalidGameName header="Game names may only contain characters a-z, A-Z, 0-9, underscores, spaces, and tabs." reset={this.reset} />)}
          {this.state.nameStatus === "valid" && (this.setName())}
        </>
    );
  }
}
