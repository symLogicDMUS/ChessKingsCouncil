import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// import {styles} from "../../../Reuseables/Dropdown.jss";

/**
 * props:
 * positionAndWidth: the positionAndWidth object includes top/left values, may include margins
 */
class SubDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.selectedPiece = "";
        this.subs = [
            <MenuItem value="None">
                <em>None</em>
            </MenuItem>,
            <MenuItem value="Rook">Rook</MenuItem>,
            <MenuItem value="Bishop">Bishop</MenuItem>,
            <MenuItem value="Knight">Knight</MenuItem>,
            <MenuItem value="Queen">Queen</MenuItem>,
        ];
    }

    handleChange(e) {
        this.selectedPiece = e.target.value;
        this.props.togleSub(this.props.piece, this.selectedPiece);
    }

    render() {

        if (
            this.props.newReplacement != null &&
            this.props.piece !== this.props.newReplacement &&
            this.props.newReplaced === this.selectedPiece
        )
            this.selectedPiece = <option value="None">None</option>;

        return (
                <FormControl
                    variant="outlined"
                    className={this.props.classes.root}
                >
                    <InputLabel id="outlined-label">Sub Piece</InputLabel>
                    <Select
                        label="Piece Sub"
                        value={this.selectedPiece}
                        onChange={this.handleChange}
                        labelId="sub-piece"
                        id="subs"
                        //Icon={<ArrowDropDownIcon />}
                    >
                        {this.subs}
                    </Select>
                </FormControl>
        );
    }
}
export default SubDropdown;