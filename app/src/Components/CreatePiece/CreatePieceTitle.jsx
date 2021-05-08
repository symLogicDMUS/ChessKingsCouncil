import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import SignInOutButton from "../Home/SignInOutButton";
import {PieceName} from "../PieceProfiles/Header/PieceName";
import {PageTitle} from "../Reuseables/AppBar/PageTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {marginLeft, useStyles} from "./CreatePieceTitle.jss";

function CreatePieceTitle({name, theme, className}) {
    const classes = useStyles();
    const sm = useMediaQuery("(max-width:960px)");

    return (
        <Box className={clsx(classes.appBar, {
            [className]: className,
        })}>
            {sm && name ? (
                <PieceName
                    theme={theme}
                    className={
                        classes.piece_name
                    }
                    title={`Piece name: "${name}" (Create Piece page)`}
                >
                    {name}
                </PieceName>
            ) : (
                <PageTitle theme={theme}>
                    Create Piece
                </PageTitle>
            )}
            <SignInOutButton theme={theme} style={marginLeft} />
        </Box>
    );
}

export default CreatePieceTitle;