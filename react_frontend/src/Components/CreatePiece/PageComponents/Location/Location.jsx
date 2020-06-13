import React from "react";
import ReactDOM from "react-dom";
import "./Location.css";
import { LocationButton } from "./LocationButton";

export class Location extends React.Component {
    constructor(props) {
        super(props)
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
        // this.props.updateLoc(rf);
        this.setState({location: rf})
    }

    render() {
        return(
            <div className="location-tool">
                <img src={require("./Location.svg")} className="location-title" />
                <LocationButton changeLoc={this.changeLoc} rf="d4"  left="10px" selected={this.isSelected("d4")}  />
                <LocationButton changeLoc={this.changeLoc} rf="d5"  left="50px" selected={this.isSelected("d5")}  />
                <LocationButton changeLoc={this.changeLoc} rf="e4"  left="90px" selected={this.isSelected("e4")}  />
                <LocationButton changeLoc={this.changeLoc} rf="e5"  left="130px" selected={this.isSelected("e5")}  />
            </div>
        );
    }
}

export let test = () => ReactDOM.render(<Location />, document.getElementById('root'));