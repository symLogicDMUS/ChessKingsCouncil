import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import {MuiDropdown} from "../../Reuseables/UserInput/MuiDropdown";
import {useStyles as useMoreStyles} from "../NewGame.jss";
import { useStyles } from "./PlayAs.jss";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import {MuiSelect} from "../../Reuseables/UserInput/MuiSelect";
import {Select} from "@material-ui/core";

export function PlayAs(props) {
    const {playerType, setPlayerType, theme, ...other} = props;

    const classes = useStyles({theme: theme});
    const classes2 = useMoreStyles();

    return (
        <Box className={clsx(classes.play_as, {[classes2.item]:true})} {...other}>
            <img
                src={`/Images/text/new game/Play As-${theme}.svg`}
                className={classes2.title}
                alt={"svg text 'Play As'"}
            />
            <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">Play As</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    onChange={setPlayerType}
                    value={playerType}
                    label="Play As"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"W"}>White</MenuItem>
                    <MenuItem value={"B"}>Black</MenuItem>
                    <MenuItem value={"Test"}>Test</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
