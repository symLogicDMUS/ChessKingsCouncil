import React from 'react'
import Box from "@material-ui/core/Box";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {PieceProfiles} from "../../PieceProfiles/PieceProfiles";
import {fontSize002} from "../../styles/fontSize.jss";
import {Close} from "../../Reuseables/Close";
import {close_icon, useStyles} from "./ProfilesModal.jss";

export function ProfilesModal({load, close, theme}) {
    const classes = useStyles({theme: theme, fontSize: fontSize002});
    return (
        <div className={classes.modal}>
            <PieceProfiles
                load={load}
                theme={theme}
                parentPage="CreatePiece"
            >
                <Box className={classes.top_bar} >
                    <Typography variant='h6' noWrap className={classes.title}>
                        Created Pieces
                    </Typography>
                    <Close onClick={close} theme={theme} style={close_icon(fontSize002)} />
                </Box>
            </PieceProfiles>
        </div>
    );
}