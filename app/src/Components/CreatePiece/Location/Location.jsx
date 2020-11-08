import React from "react";
import ReactDOM from "react-dom";
import { LocationButton } from "./LocationButton";
import { stylesObjects } from "../create-piece-styles-objects";
import "./Location.scss";

export class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = { location: "d4" };
        this.changeLoc = this.changeLoc.bind(this);
        this.isSelected.bind(this);
        console.log("hello");
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
            <>
                    <div className="location-tool" style={stylesObjects[this.props.screenCase]["Location"]()}>
                        <div className="location-title">Location</div>
                        <LocationButton
                            changeLoc={this.changeLoc}
                            rf="d4"
                            selected={this.isSelected("d4")}
                            setUnsaved={this.props.setUnsaved}
                        />
                        <LocationButton
                            changeLoc={this.changeLoc}
                            rf="e4"
                            selected={this.isSelected("e4")}
                            setUnsaved={this.props.setUnsaved}
                        />
                        <LocationButton
                            changeLoc={this.changeLoc}
                            rf="e5"
                            selected={this.isSelected("e5")}
                            setUnsaved={this.props.setUnsaved}
                        />
                        <LocationButton
                            changeLoc={this.changeLoc}
                            rf="d5"
                            selected={this.isSelected("d5")}
                            setUnsaved={this.props.setUnsaved}
                        />
                    </div>
            </>
        );
    }
}

export let test = () => ReactDOM.render(<Location />, document.getElementById("root"));
