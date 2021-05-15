import React from 'react'
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {Close} from "../../Reuseables/Modals/Close";
import PieceProfiles from "../../PieceProfiles/PieceProfiles";
import {useStyles} from "./ProfilesModal.jss";

function ProfilesModal({load, erase, close, theme}) {
    const classes = useStyles({theme: theme});

    return (
        <div className={classes.modal}>
            <PieceProfiles
                load={load}
                erase={erase}
                theme={theme}
                toggleModal={close}
                parentPage="CreatePiece"
            >
                <Box className={classes.top_bar} >
                    <Typography variant='h6' noWrap className={classes.title}>
                        Saved Pieces
                    </Typography>
                    <Close onClick={close} theme={theme} className={classes.close_icon} />
                </Box>
            </PieceProfiles>
        </div>
    );
}

export default ProfilesModal;