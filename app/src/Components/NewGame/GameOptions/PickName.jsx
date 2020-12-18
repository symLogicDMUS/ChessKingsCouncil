import React from "react";
import { Typography } from "@material-ui/core";
import { MuiTextField } from "../../Reuseables/MuiTextField";
import Box from "@material-ui/core/Box";
import {fontSize} from "../../CreatePiece/fontSize.jss";
import { useStyles, text_field } from "./PickName.jss";

export function PickName({ setGameName, gameName, theme }) {
    const classes = useStyles({ fontSize: fontSize*6, text: "Game Name" });

    return (
        <>
            <Box width='100%'
                 display='flex'
                 flexDirection='row'
                 justifyContent='center'
            >
                <Typography className={classes.title}>Game Name</Typography>
            </Box>
            <Box width='100%'
                 display='flex'
                 flexDirection='row'
                 justifyContent='center'
            >
                <MuiTextField
                    value={gameName}
                    onChange={setGameName}
                    style={text_field(fontSize)}
                    theme={theme}
                    id={"pick-game-name"}
                    label={"Pick game name"}
                    variant={"outlined"}
                />
            </Box>
        </>
    );
}
