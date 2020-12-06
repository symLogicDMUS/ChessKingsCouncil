import React, {useEffect} from "react";
import MenuItem from "@material-ui/core/MenuItem";
import {Typography} from "@material-ui/core";
import {Dropdown} from "../../Reuseables/Dropdown";
import {themes} from "../../styles/themes.jss";
import {useStyles, dropdown} from "./PlayAs.jss";

export function PlayAs({setPlayerType, fontSize}) {

    const classes = useStyles({fontSize: fontSize, text: "Play As"});
    const dropdownStyle = dropdown(fontSize);

    return (
        <>
            <Typography className={classes.title}>Play As</Typography>
            <Dropdown
                updateParent={setPlayerType}
                list={[
                    <MenuItem value="None">
                        <em>None</em>
                    </MenuItem>,
                    <MenuItem value="Test">Test</MenuItem>,
                    <MenuItem value="White">White</MenuItem>,
                    <MenuItem value="Black">Black</MenuItem>,
                ]}
                overwrite={null}
                theme={themes.black}
                style={dropdownStyle}
                label={'Play As'}
                inputLabel={'Play As'}
            />
        </>
    );
}
