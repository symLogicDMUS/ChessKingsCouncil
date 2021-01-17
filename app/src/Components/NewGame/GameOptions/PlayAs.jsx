import React, {useEffect} from "react";
import MenuItem from "@material-ui/core/MenuItem";
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {Dropdown} from "../../Reuseables/Dropdown";
import {fontSize} from "../../styles/fontSize.jss";
import {useStyles, dropdownStyle} from "./PlayAs.jss";

export function PlayAs({setPlayerType, theme}) {

    const classes = useStyles({fontSize: fontSize * 6, text: 'Play As'});

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
                    style={dropdownStyle(fontSize)}
                    label='Play As'
                    inputLabel='Play As'
                />
            </Box>
        </>
    );
}
