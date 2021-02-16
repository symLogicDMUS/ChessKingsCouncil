import React from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import {Dropdown} from "../../Reuseables/Dropdown";
import {fontSize0018} from "../../styles/fontSizes.jss";
import {useStyles, textFieldStyle, textFieldGenStyle} from "../NewGame.jss";

export function PlayAs({setPlayerType, theme, children}) {

    const classes = useStyles();

    return (
            <Box className={classes.player_types}>
                <Typography className={classes.title}>
                    Play As
                    <Dropdown
                        updateParent={setPlayerType}
                        list={[
                            <MenuItem value="None">
                                <em>None</em>
                            </MenuItem>,
                            <MenuItem value="White" classes={{root: classes.player_type}}>White</MenuItem>,
                            <MenuItem value="Black" classes={{root: classes.player_type}}>Black</MenuItem>,
                            <MenuItem value="Test" classes={{root: classes.player_type}}>Test</MenuItem>,
                        ]}
                        overwrite={null}
                        variant='outlined'
                        theme={theme}
                        label='Play As'
                        inputLabel='Play As'
                        style={textFieldStyle(fontSize0018)}
                        genStyle={textFieldGenStyle}
                    />
                    {children}
                </Typography>
            </Box>
    );
}

