import React from "react";
import ReactDOM from "react-dom";
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

    getStyle() {
        return {
            width: window.screen.availWidth * 0.26,
            left: window.screen.availWidth * 0.57,
            height: window.screen.availHeight * 0.08,
            top: window.screen.availHeight * 0.1976,
        };
    }

    render() {
        this.userInput = this.props.name;

        return (
            <div
                className="name-component1"
                style={this.getStyle()}
            >
                <div className="name">Name</div>
                <input
                    type="text"
                    value={this.userInput}
                    onChange={this.handleUserInput}
                    className="form1"
                    placeholder="enter name of piece..."
                />
            </div>
        );
    }
}

export default Name;

export let test = () => ReactDOM.render(<Name />, document.getElementById("root"));
