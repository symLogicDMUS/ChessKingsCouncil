import React from "react";
import "../css/SaveAs.css";

export class SaveAs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {gameName: ""}
        this.closeSaveAs = this.closeSaveAs.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.acceptName = this.acceptName.bind(this);
    }

    handleUserInput(e) {
        this.setState({gameName: e.target.value})
    }

    closeSaveAs() {
        this.props.togleSaveAs(false);
        this.props.update();
    }

    acceptName() {
        this.props.changeName(this.state.gameName);
        this.props.update();
        this.props.save();
        this.props.togleSaveAs(false);
        this.props.update();
    }

    render() {
        return (
            <div className="save-as-modal">
                <div className="save-as-window">
                    <div className="save-as-text-label">
                        Save As...
                    </div>
                    <input type="text" value={this.state.gameName} onChange={this.handleUserInput} className="save-as-form" placeholder="enter name of game..." />
                    <div className="save-as-ok" onClick={this.acceptName}>
                        Ok
                    </div>
                    <div className="save-as-cancel" onClick={this.closeSaveAs}>
                        Cancel
                    </div>
                </div>
            </div>
        )
    }
}