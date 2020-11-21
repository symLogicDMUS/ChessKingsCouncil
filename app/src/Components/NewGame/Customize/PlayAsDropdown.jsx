import React from "react";
import { getColorLetter } from "../../helpers/getColorLetter";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ArrowDropDownIcon from "@material-ui/core/Select";
import {dropdownStyle} from "../../Reuseables/dropdownStyle.jss";
import "../../Reuseables/MuiSelect.scss";

export class PlayAsDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.selectedType = ""
        this.playerTypes = [
            <MenuItem value="None">
                <em>None</em>
            </MenuItem>,
            <MenuItem value="Test">Test</MenuItem>,
            <MenuItem value="White">White</MenuItem>,
            <MenuItem value="Black">Black</MenuItem>,
        ];
    }

    handleChange(e) {
        this.selectedType = e.target.value;
        this.props.setPlayerType(getColorLetter(this.selectedType));
    }

    render() {

        const fontAndHeight = dropdownStyle[this.props.screenCase]['dropdown'](this.props.fontSize)

        return (
            <>
                <FormControl variant="outlined" className="mui-select" style={this.props.positionAndWidth}>
                    <InputLabel id="outlined-label" style={fontAndHeight}>Play As</InputLabel>
                    <Select
                        label="Play As"
                        id="player-type"
                        labelId="play-as"
                        style={fontAndHeight}
                        value={this.selectedType}
                        onChange={this.handleChange}
                        // icon={<ArrowDropDownIcon />}
                    >
                        {this.playerTypes}
                    </Select>
                </FormControl>
            </>
        );
    }
}
