import React from "react";
import ReactDOM from "react-dom";
import { LocationButton } from "./LocationButton";
import {HelpComponent} from "../../Help/HelpComponent";
import {HelpText} from "./HelpText";
import "./Location.css";

export class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {location: "d4"}
        this.changeLoc = this.changeLoc.bind(this);
        this.isSelected.bind(this);
    }

    isSelected(rf) {
        if (rf === this.state.location)
            return true
        else
            return false
    }

    changeLoc(rf) {
        this.setState({location: rf})
        this.props.setLoc(rf);
    }

    render() {
        return(
            <div className="location-tool">
                <div className="location-title">Location</div>
                <HelpComponent helpTitle="Location of Piece When Creating it"
                               hmChildName="none"
                               helpText={HelpText}
                               togleHelpModal={this.props.togleHelpModal} 
                               setHelpText={this.props.setHelpText} 
                               style={{left:77, top:16, zIndex:"inherit", width:10, height:10}}
                               normal="/Images/question-mark-a9a9a9.svg"
                               highlighted="/Images/question-mark-72e2ff.svg"
                               color="#72e2ff"                               
                />
                <LocationButton changeLoc={this.changeLoc} rf="d4"  left="10px"  selected={this.isSelected("d4")} setUnsaved={this.props.setUnsaved}  />
                <LocationButton changeLoc={this.changeLoc} rf="d5"  left="50px"  selected={this.isSelected("d5")} setUnsaved={this.props.setUnsaved}  />
                <LocationButton changeLoc={this.changeLoc} rf="e4"  left="90px"  selected={this.isSelected("e4")} setUnsaved={this.props.setUnsaved}  />
                <LocationButton changeLoc={this.changeLoc} rf="e5"  left="130px" selected={this.isSelected("e5")} setUnsaved={this.props.setUnsaved}  />
            </div>
        );
    }
}

export let test = () => ReactDOM.render(<Location />, document.getElementById('root'));