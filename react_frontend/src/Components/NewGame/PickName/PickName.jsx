import React from "react";
import {NavBar} from "../../NavBar/NavBarRegular3";
import {HelpModal} from "../../Help/HelpModal";
import "./PickName.css";

export class PickName extends React.Component {

  constructor(props) {
    super(props)
    this.state = {userInput: '', bValue: true, isHelpModal:false};
    this.navExpanded = true;
    this.helpTitle = null;
    this.helpText = null;
    this.hmChildName = null;
    this.handleUserInput = this.handleUserInput.bind(this);
    this.setName = this.setName.bind(this);
    this.setHelpText = this.setHelpText.bind(this);
    this.togleHelpModal = this.togleHelpModal.bind(this);
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
          <div class="div">
            <img src="/Images/enter-name.svg" className="components" alt="title to enter name" />
            <form onSubmit={this.setName}>
              <input type="text" id="gname" value={this.state.userInput} onChange={this.handleUserInput} className="components"/>
              <input type="submit" value="Submit" className="components"/>
            </form>
          </div>
          {this.state.isHelpModal && (<HelpModal helpTitle={this.helpTitle}
                                                       helpText={this.helpText}
                                                       hmChildName={this.hmChildName}
                                                       extraModal={null}
                                                       togleHelpModal={this.togleHelpModal}/>)}
        </>
    );
  }
}
