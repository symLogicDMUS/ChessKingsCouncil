import React, {useEffect} from "react";
import MenuItem from "@material-ui/core/MenuItem";
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {Dropdown} from "../../Reuseables/Dropdown";
import {fontSize001725, fontSize0018, fontSize012} from "../../styles/fontSizes.jss";
import {fontSizes, input_style} from "../NewGame.jss";
import {useStyles} from "./PlayAs.jss";
import {MuiTextField} from "../../Reuseables/MuiTextField";

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
                        <MenuItem value="White" style={{fontSize: fontSize0018}}>White</MenuItem>,
                        <MenuItem value="Black" style={{fontSize: fontSize0018}}>Black</MenuItem>,
                        <MenuItem value="Test" style={{fontSize: fontSize0018}}>Test</MenuItem>,
                    ]}
                    overwrite={null}
                    variant='outlined'
                    theme={theme}
                    label='Play As'
                    inputLabel='Play As'
                    genStyle={input_style('Play As', fontSizes[screenCase], 'Garamond', theme)}
                    style={{
                        text: {
                            normal: {
                                fontSize: fontSize0018,
                                height: '1em'
                            },
                            hover: {
                                fontSize: fontSize0018,
                                height: '1em'
                            },
                            focused: {
                                fontSize: fontSize0018,
                                height: '1em'

                            },
                        },
                        root: {
                            normal: {
                                fontSize: fontSize0018,
                                height: '1em'
                            },
                            hover: {
                                fontSize: fontSize0018,
                                height: '1em'
                            },
                            focused: {
                                fontSize: fontSize0018,
                                height: '1em'

                            },
                        }}}
                />
            </Box>
        </>
    );
}

