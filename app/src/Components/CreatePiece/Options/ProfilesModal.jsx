import React, {useState} from 'react'
import PieceProfiles from "../../PieceProfiles/PieceProfiles";
import {ProfilesTitle} from "../../PieceProfiles/ProfilesTitle";
import {useStyles} from "./ProfilesModal.jss";
import {Backdrop} from "@material-ui/core";
import {Close} from "../../Reuseables/Modals/Close";

function ProfilesModal({load, erase, close, theme}) {
    const classes = useStyles({theme: theme});

    const [searchText, setSearchText] = useState("");
    const updateSearchText = (text) => {
        setSearchText(text)
    };

    return (
        <>
            <Backdrop
                open={true}
                onClick={close}
                className={classes.backdrop}
            />
            <PieceProfiles
                load={load}
                erase={erase}
                theme={theme}
                toggleModal={close}
                parentPage="CreatePiece"
                searchText={searchText}
                className={classes.profiles_dialog}
            >
                <ProfilesTitle
                    theme={theme}
                    updateSearchText={updateSearchText}
                >
                    Saved Pieces
                </ProfilesTitle>
                <Close onClick={close} className={classes.close} theme={theme} />
            </PieceProfiles>
        </>
    );
}

export default ProfilesModal;