import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { labelSizes, styleObjects } from "../CustomizeStyle";
import "./SubDropdown.scss";

export class SubDropdown extends React.Component {
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
            <ThemeProvider theme={labelSizes[this.props.screenCase]["h1"]}>
                <FormControl
                    variant="outlined"
                    className="customize-sub-dropdown"
                    style={styleObjects[this.props.screenCase]["SubDropdown"]()}
                >
                    <InputLabel id="outlined-label">Sub Piece</InputLabel>
                    <Select
                        id="subs"
                        labelId="demo-simple-select-outlined-label"
                        value={this.selectedPiece}
                        onChange={this.handleChange}
                        label="Piece Sub"
                        //Icon={<ArrowDropDownIcon />}
                        style={{width: styleObjects[this.props.screenCase]['h1']*15}}
                    >
                        {this.subs}
                    </Select>
                </FormControl>
            </ThemeProvider>
        );
    }
}