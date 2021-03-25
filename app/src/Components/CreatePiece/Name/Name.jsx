import React from "react";
import clsx from "clsx";
import {useMediaQuery} from '@material-ui/core'
import {MuiTextField as TextField} from "../../Reuseables/UserInput/MuiTextField";
import {useStyles as useMoreStyles} from "../CreatePiece.jss";
import {useStyles} from "./Name.jss";

export function Name({updateName, theme, defaultValue}) {
    const classes = useStyles({theme: theme})
    const classes2 = useMoreStyles({theme: theme})
    const isThin = useMediaQuery('(max-width: 960px)')
    const isWide = useMediaQuery('(min-width: 960px)')

    const handleInput = (e) => {
        updateName(e.target.value)
    };

    return (
        <TextField
            theme={theme}
            fullWidth={true}
            label='Piece Name'
            autoComplete="off"
            autoFocus={true}
            variant="outlined"
            onChange={handleInput}
            defaultValue={defaultValue}
            size={isThin ? 'small' : 'medium'}
            rootClassName={classes.name}
            id="game-name"
        />
    );
}