import React from "react";
import ReactDOM from "react-dom";
import { LocationButton } from "./LocationButton";
import "./Location.scss";

export class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = { location: "d4" };
        this.changeLoc = this.changeLoc.bind(this);
        this.isSelected.bind(this);
    }

    getStyle() {
        return {
            width: window.screen.availWidth * 0.26,
            height: window.screen.availHeight * 0.103,
            top: window.screen.availHeight * 0.67,
            left: window.screen.availWidth * 0.57,
        };
    }

    isSelected(rf) {
        if (rf === this.state.location) return true;
        else return false;
    }

    changeLoc(rf) {
        this.setState({ location: rf });
        this.props.setLoc(rf);
    }

    render() {
        return (
            <div className="location-tool" style={this.getStyle()}>
                <div className="location-title">Location</div>
                <LocationButton
                    changeLoc={this.changeLoc}
                    rf="d4"
                    left="10px"
                    selected={this.isSelected("d4")}
                    setUnsaved={this.props.setUnsaved}
                />
                <LocationButton
                    changeLoc={this.changeLoc}
                    rf="e4"
                    left="50px"
                    selected={this.isSelected("e4")}
                    setUnsaved={this.props.setUnsaved}
                />
                <LocationButton
                    changeLoc={this.changeLoc}
                    rf="e5"
                    left="90px"
                    selected={this.isSelected("e5")}
                    setUnsaved={this.props.setUnsaved}
                />
                <LocationButton
                    changeLoc={this.changeLoc}
                    rf="d5"
                    left="130px"
                    selected={this.isSelected("d5")}
                    setUnsaved={this.props.setUnsaved}
                />
            </div>
        );
    }
}

export let test = () => ReactDOM.render(<Location />, document.getElementById("root"));
