import React, {useEffect} from "react";
import MenuItem from "@material-ui/core/MenuItem";
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {Dropdown} from "../../Reuseables/Dropdown";
import {fontSize012} from "../../styles/fontSizes.jss";
import {fontSizes, input_style} from "../NewGame.jss";
import {useStyles} from "./PlayAs.jss";

export function PlayAs({setPlayerType, theme, screenCase}) {

    const classes = useStyles({fontSize: fontSize012, text: 'Play As'});

    return (
        <>
            <Box width='100%'
                 display='flex'
                 flexDirection='row'
                 justifyContent='center'
            >
                <Typography className={classes.title}>Play As</Typography>
            </Box>
            <Box width='100%'
                 display='flex'
                 flexDirection='row'
                 justifyContent='center'
            >
                <Dropdown
                    updateParent={setPlayerType}
                    list={[
                        <MenuItem value="None">
                            <em>None</em>
                        </MenuItem>,
                        <MenuItem value="White">White</MenuItem>,
                        <MenuItem value="Black">Black</MenuItem>,
                        <MenuItem value="Test">Test</MenuItem>,
                    ]}
                    overwrite={null}
                    variant='outlined'
                    theme={theme}
                    style={input_style('Play As', fontSizes[screenCase], 'Garamond', theme)}
                    label='Play As'
                    inputLabel='Play As'
                />
            </Box>
        </>
    );
}
