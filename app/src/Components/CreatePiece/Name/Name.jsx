import React from "react";
import {useMediaQuery} from 'react-responsive'
import {MuiTextField as TextField} from "../../Reuseables/UserInput/MuiTextField";
import {useStyles as useMoreStyles} from "../CreatePiece.jss";
import {useStyles} from "./Name.jss";

export function Name({updateName, theme, defaultValue, screenCase}) {
    const classes = useStyles({theme: theme})
    const classes2 = useMoreStyles({theme: theme})
    const isMobile = useMediaQuery({query: '(max-width: 1040px)'})
    const isDesktop = useMediaQuery({query: '(min-width: 1040px)'})

    const handleInput = (e) => {
        updateName(e.target.value)
    };

    return (
        <div className={isDesktop ? classes2.tool_flexbox : classes.name}>
            <TextField
                theme={theme}
                fullWidth={true}
                label='Piece Name'
                autoComplete="off"
                autoFocus={true}
                variant="outlined"
                onChange={handleInput}
                defaultValue={defaultValue}
                size={isMobile ? 'small' : 'medium'}
                id="game-name"
            />
        </div>
    );
}