import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import ArrowDropDownIcon from "@material-ui/core/Select";
import { getColorLetter } from "../../../helpers/getColorLetter";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// import {styles} from "../../../Reuseables/Dropdown.jss"

class PlayAsDropdown extends React.Component {
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

        return (
            <>
                <FormControl variant="outlined" className={this.props.root}>
                    <InputLabel id="outlined-label">Play As</InputLabel>
                    <Select
                        label="Play As"
                        id="player-type"
                        labelId="play-as"
                        value={this.selectedType}
                        onChange={this.handleChange}
                    >
                        {this.playerTypes}
                    </Select>
                </FormControl>
            </>
        );
    }
}
export default PlayAsDropdown;
// export default withStyles(styles)(PlayAsDropdown)