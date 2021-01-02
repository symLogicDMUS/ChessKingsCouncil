import React from 'react'
import Box from "@material-ui/core/Box";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {PieceProfiles} from "../../PieceProfiles/PieceProfiles";
import {fontSize} from "../../styles/fontSize.jss";
import {useStyles} from "./ProfilesModal.jss";

export function ProfilesModal({load, close, theme}) {
    const classes = useStyles({theme: theme, fontSize: fontSize});
    return (
        <div className={classes.modal}>
            {/*<Box className={classes.top_bar} >*/}
            {/*    <Typography variant='h6' noWrap className={classes.title}>*/}
            {/*        Created Pieces*/}
            {/*    </Typography>*/}
            {/*    <IconButton onClick={close} className={classes.close}>*/}
            {/*        <CloseIcon />*/}
            {/*    </IconButton>*/}
            {/*</Box>*/}
            <PieceProfiles
                load={load}
                parentPage="CreatePiece"
                theme={theme}
            />
        </div>
    );
}