import React from "react";
import {getColorLetter} from "../../helpers/getColorLetter";
import "./NewGamePlayerType.css";

export class NewGamePlayerType extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.playerTypes = [
            <option value="Test">Test</option>,
            <option value="White">White</option>,
            <option value="Black">Black</option>
        ];
        this.selectedType = this.playerTypes[0];
    }

    handleChange(e) {
        this.selectedType = e.target.value;
        this.props.setPlayerType(getColorLetter(this.selectedType));
    }

    render() {
        return (
            <div>
                <div className="new-game-player-type-label">
                    Play As
                </div>
                <select id="player-type" onChange={this.handleChange} className="new-game-player-type-dropdown" value={this.selectedType}>
                    {this.playerTypes}
                </select>
            </div>
        );
    }
}
