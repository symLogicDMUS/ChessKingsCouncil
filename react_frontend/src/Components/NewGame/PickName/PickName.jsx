import React from "react";
import {NavBar} from "../../NavBar/NavBarRegular";
import {NavExpand} from "../../NavBar/NavExpand";
import {NavColapse} from "../../NavBar/NavColapse";
import "./PickName.css";

export class PickName extends React.Component {

  constructor(props) {
    super(props)
    this.state = {userInput: '', bValue: true};
    this.navExpanded = true;
    this.handleUserInput = this.handleUserInput.bind(this);
    this.setName = this.setName.bind(this);
    this.togleNav = this.togleNav.bind(this);
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

  togleNav(boolVal) {
    this.navExpanded = boolVal;
    this.setState({bValue: ! this.state.bValue});
  }

  render() {
    return (
        <>
          <div class="div">
            <img src="/Images/enter-name.svg" className="components" alt="title to enter name" />
            <form onSubmit={this.setName}>
              <input type="text" id="gname" value={this.state.userInput} onChange={this.handleUserInput} className="components"/>
              <input type="submit" value="Submit" className="components"/>
            </form>
          </div>
          {this.navExpanded && (<NavBar navBarPosTop={0} 
                                        navBarPosLeft={475} 
                                        backgroundColor="black" 
                                        iconColor="969696" 
                                        iconColorHover="ffffff" 
                                        backgroundColorSelected="#3d3d3d" 
                                        border="1px solid black" />)}
          {this.navExpanded && (<NavColapse left={1075}  
                                            top={-1} 
                                            togleNav={this.togleNav} 
                                            backgroundColor="black" 
                                            iconColor="b6b6b6" 
                                            border="1px solid #515151" />)}
          {! this.navExpanded && (<NavExpand left={1075}
                                             top={-1} 
                                             togleNav={this.togleNav} 
                                             backgroundColor="black" 
                                             iconColor="b6b6b6" 
                                             border="1px solid #515151" />)}
        </>
    );
  }
}
