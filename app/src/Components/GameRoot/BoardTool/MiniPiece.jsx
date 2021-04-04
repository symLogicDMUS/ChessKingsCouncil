import React from "react";
import MediaQuery from "react-responsive/src";
import Box from "@material-ui/core/Box";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { IconButton, Portal, Typography } from "@material-ui/core";
import { NoProfile } from "../../PieceProfiles/ProfileWB/NoProfile";
import { ProfileWBDrawer } from "../../PieceProfiles/ProfileWB/ProfileWBDrawer";
import { ProfileWBModal } from "../../PieceProfiles/ProfileWB/ProfileWBModal";
import { ProfileWB } from "../../PieceProfiles/ProfileWB/ProfileWB";
import { getColorName } from "../../helpers/getColorName";
import { useStyles } from "./MiniPiece.jss";

export function MiniPiece({
    rf,
    def,
    color,
    imgUrl,
    isSpecial,
    pieceName,
    selectedSqr,
    openProfile,
    closeProfile,
    showProfileOnClick,
    screenCase,
    theme,
    alt,
}) {
    const classes = useStyles({ theme: theme });
    return (
        <>
            <MediaQuery maxWidth={960}>
                {showProfileOnClick ? (
                    <Portal>
                        {isSpecial && rf === selectedSqr ? (
                            <NoProfile
                                imgUrl={imgUrl}
                                pieceName={pieceName}
                                screenCase={screenCase}
                                closeProfile={closeProfile}
                                theme={theme}
                            />
                        ) : (
                            <ProfileWBDrawer
                                def={def}
                                color={color}
                                pieceName={pieceName}
                                isActive={rf === selectedSqr}
                                closeProfile={closeProfile}
                                screenCase={screenCase}
                                theme={theme}
                            >
                                <Box className={classes.piece_header}>
                                    <IconButton
                                        edge="end"
                                        onClick={closeProfile}
                                        className={classes.icon_button}
                                    >
                                        <ChevronRightIcon
                                            className={classes.icon}
                                        />
                                    </IconButton>
                                    <Typography
                                        className={classes.piece_name}
                                    >
                                        {getColorName(color)} {pieceName}
                                    </Typography>
                                </Box>
                                <ProfileWB
                                    def={def}
                                    color={color}
                                    theme={theme}
                                    pieceName={pieceName}
                                    screenCase={screenCase}
                                    hasDrawerParent={true}
                                />
                            </ProfileWBDrawer>
                        )}
                    </Portal>
                ) : null}
            </MediaQuery>
            <MediaQuery minWidth={960}>
                {rf === selectedSqr && showProfileOnClick ? (
                    <Portal>
                        {isSpecial ? (
                            <NoProfile
                                color={color}
                                imgUrl={imgUrl}
                                pieceName={pieceName}
                                screenCase={screenCase}
                                closeProfile={closeProfile}
                                theme={theme}
                            />
                        ) : (
                            <ProfileWBModal
                                def={def}
                                color={color}
                                pieceName={pieceName}
                                closeProfile={closeProfile}
                                screenCase={screenCase}
                                theme={theme}
                            />
                        )}
                    </Portal>
                ) : null}
            </MediaQuery>
            <img
                src={imgUrl}
                className={classes.piece}
                onClick={rf === selectedSqr ? closeProfile : openProfile}
                alt={`${alt} (icon of a piece)`}
            />
        </>
    );
}
