import React, { memo } from "react";
import MediaQuery from "react-responsive/src";
import { Portal } from "@material-ui/core";
import { NoProfile } from "../../PieceProfiles/ProfileWB/NoProfile";
import { ProfileWBDrawer } from "../../PieceProfiles/ProfileWB/Drawer/ProfileWBDrawer";
import { ProfileWBModal } from "../../PieceProfiles/ProfileWB/ProfileWBModal";
import { useStyles } from "./AnalysisPiece.jss";

export const AnalysisPiece = memo(
    ({
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
    }) => {
        const classes = useStyles({ theme: theme });
        return (
            <>
                <MediaQuery maxWidth={960}>
                    {showProfileOnClick ? (
                        <Portal>
                            {isSpecial && rf === selectedSqr ? (
                                <NoProfile
                                    theme={theme}
                                    imgUrl={imgUrl}
                                    pieceName={pieceName}
                                    screenCase={screenCase}
                                    closeProfile={closeProfile}
                                />
                            ) : (
                                <ProfileWBDrawer
                                    def={def}
                                    color={color}
                                    imgUrl={imgUrl}
                                    pieceName={pieceName}
                                    isActive={rf === selectedSqr}
                                    closeProfile={closeProfile}
                                    screenCase={screenCase}
                                    theme={theme}
                                />
                            )}
                        </Portal>
                    ) : null}
                </MediaQuery>
                <MediaQuery minWidth={960}>
                    {rf === selectedSqr && showProfileOnClick ? (
                        <Portal>
                            {isSpecial ? (
                                <NoProfile
                                    theme={theme}
                                    imgUrl={imgUrl}
                                    pieceName={pieceName}
                                    screenCase={screenCase}
                                    closeProfile={closeProfile}
                                />
                            ) : (
                                <ProfileWBModal
                                    def={def}
                                    color={color}
                                    imgUrl={imgUrl}
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
                    className={classes.piece_img}
                    onClick={rf === selectedSqr ? closeProfile : openProfile}
                    alt={`${alt} (icon of a piece)`}
                />
            </>
        );
    }
);
