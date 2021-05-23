import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import SignInOutButton from "../../Home/Sign In/SignInOutButton";
import {PieceName} from "../../PieceProfiles/Header/PieceName";
import {PageTitle} from "../../Reuseables/AppBar/PageTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {marginLeft, useStyles} from "./CreatePieceTitle.jss";
import BlackImgAvatar from "./BlackImgAvatar";
import {marginRight} from "../../PieceProfiles/Header/LoadDeleteHeader.jss";

function CreatePieceTitle({name, blackImg, theme, className}) {
    const classes = useStyles();
    const sm = useMediaQuery("(max-width:960px)");

    return (
        <>
            {sm && name && (
                <>
                    <Box className={classes.piece_name_bar}>
                        <PieceName
                            theme={theme}
                            className={
                                classes.piece_name
                            }
                            title={`Piece name: "${name}" (Create Piece page)`}
                        >
                            {name}
                        </PieceName>
                    </Box>
                    <Box className={clsx(classes.appBar, {
                        [className]: className,
                    })}>
                        <BlackImgAvatar theme={theme} style={marginLeft}>
                            {blackImg}
                        </BlackImgAvatar>
                        <SignInOutButton theme={theme} style={! blackImg ? marginLeft : null}/>
                    </Box>
                </>
            )}
            {(! sm || ! name) && (
                <Box className={clsx(classes.appBar, {
                    [className]: className,
                })}>
                    <PageTitle theme={theme} style={marginRight}>
                        Create Piece
                    </PageTitle>
                    <BlackImgAvatar theme={theme} style={marginLeft}>
                        {blackImg}
                    </BlackImgAvatar>
                    <SignInOutButton theme={theme}  />
                </Box>
            )}
        </>

    );
}

export default CreatePieceTitle;