import React from "react";
import ReactDOM from "react-dom";
import { stylesObjects } from "../styles-objects";
import "./Name.scss";

export class Name extends React.Component {
    constructor(props) {
        super(props);
        this.userInput = this.props.name;
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e) {
        this.userInput = e.target.value;
        this.props.setUnsaved(true);
        this.props.updateName(this.userInput);
    }

    render() {
        this.userInput = this.props.name;

        return (
            <div className="name-component1" style={stylesObjects[this.props.screenCase]["Name"]()}>
                <div className="name">Name</div>
                <input
                    type="text"
                    value={this.userInput}
                    onChange={this.handleUserInput}
                    className="form1"
                    placeholder="Piece Name..."
                />
            </div>
        );
    }
}

export default Name;

export let test = () => ReactDOM.render(<Name />, document.getElementById("root"));
