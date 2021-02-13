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
        <div className={classes.item}>
            <Box width='100%'
                 display='flex'
                 flexDirection='row'
                 justifyContent='center'
            >
                <Typography className={classes.title}>
                    Play As
                    <Dropdown
                        updateParent={setPlayerType}
                        list={[
                            <MenuItem value="None">
                                <em>None</em>
                            </MenuItem>,
                            <MenuItem value="White" style={{fontSize: fontSize0018}}>White</MenuItem>,
                            <MenuItem value="Black" style={{fontSize: fontSize0018}}>Black</MenuItem>,
                            <MenuItem value="Test" style={{fontSize: fontSize0018}}>Test</MenuItem>,
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
        </div>
    );
}

