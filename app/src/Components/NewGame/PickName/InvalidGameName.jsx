import React from "react";
import ReactDOM from "react-dom";
import { styles } from "./InvalidGameName.jss";

export function InvalidGameName() {
    return (
        <div className={this.props.classes.invalid_game_name_modal}>
            <div className={this.props.classes.invalid_game_name_window}>
                <div className={this.props.classes.invalid_game_name_heading}>{this.props.header}</div>
                <button className={this.props.classes.invalid_game_name_button} onClick={this.props.reset}>
                    Ok
                </button>
            </div>
        </div>
    );
}

export let test = () => ReactDOM.render(<InvalidGameName />, document.getElementById("root"));
