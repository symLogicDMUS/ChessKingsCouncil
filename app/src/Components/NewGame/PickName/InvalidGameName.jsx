import React from "react";
import ReactDOM from "react-dom";
import "./InvalidGameName.css";

export class InvalidGameName extends React.Component {

    render() {
        return (
            <div className="invalid-game-name-modal">
                <div className="invalid-game-name-window">
                    <div className="invalid-game-name-heading">{this.props.header}</div>
                    <button className="invalid-game-name-button" onClick={this.props.reset}>
                        Ok
                    </button>
                </div>
            </div>
        )
    }
}

export let test = () => ReactDOM.render(<InvalidGameName />, document.getElementById('root'))