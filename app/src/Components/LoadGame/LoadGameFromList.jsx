import React from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {Dropdown} from "../Reuseables/Dropdown";
import {fontSize} from "../styles/fontSize.jss";
import {MuiButton as Button} from "../Reuseables/MuiButton";
import {button, dropdown, useStyles} from "./LoadGameFromList.jss";

export function LoadGameFromList(props) {
    const classes = useStyles({theme: props.theme, fontSize: fontSize});
    return (
        <Box className={classes.flexbox}>
            <Box className={classes.content}>
                <Typography
                    className={classes.title}
                    noWrap={true}
                >
                    Load Game
                </Typography>
                <Dropdown
                    style={dropdown(fontSize)}
                    overwrite={null}
                    list={props.gameList}
                    theme={props.theme}
                    updateParent={props.changeName}
                    variant="outlined"
                    labelId="pick-name-label"
                    inputId="pick-name-input"
                    selectId="pick-name-select"
                    label="Pick name..."
                    inputLabel="Pick name..."
                />
                <Box className={classes.buttons}>
                    <Button
                        onClick={() => props.load()}
                        variant={"contained"}
                        theme={props.theme}
                        isDisabled={props.isDisabled()}
                        style={button(fontSize)}
                    >
                        Play
                    </Button>
                    <Button
                        onClick={() => props.askDeleteGame()}
                        variant={"contained"}
                        theme={props.theme}
                        isDisabled={props.isDisabled()}
                        style={button(fontSize)}
                    >
                        Delete
                    </Button>
                </Box>
            </Box>
        </Box>

    )
}