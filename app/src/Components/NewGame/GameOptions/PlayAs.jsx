import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import { Select } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { ReactComponent as Title } from "./svg/text/Play As.svg";
import { useStyles as useMoreStyles } from "../NewGame.jss";
import { themes } from "../../styles/themes/themes.jss";
import { svgStyle } from "../../styles/svgStyle.jss";
import { selectFill, useStyles } from "./PlayAs.jss";

function PlayAs(props) {
    const { playerType, setPlayerType, theme, ...other } = props;

    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles();

    return (
        <Box
            className={clsx(classes.play_as, { [classes2.item]: true })}
            {...other}
        >
            <Title
                style={svgStyle}
                className={classes2.title}
                fill={themes[theme].text_alt3}
            />
            <FormControl variant="filled" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                    Play As
                </InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    onChange={setPlayerType}
                    value={playerType}
                    label="Play As"
                    style={selectFill(theme)}
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

export default PlayAs;
