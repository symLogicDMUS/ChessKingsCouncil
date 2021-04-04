import React from "react";
import MediaQuery from "react-responsive/src";
import { Portal } from "@material-ui/core";
import { NoProfile } from "../../PieceProfiles/ProfileWB/NoProfile";
import { ProfileWBDrawer } from "../../PieceProfiles/ProfileWB/Drawer/ProfileWBDrawer";
import { ProfileWBModal } from "../../PieceProfiles/ProfileWB/ProfileWBModal";
import { ToolModal } from "../../NewGame/Customize/ToolModal";
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
                            <ToolModal theme={theme} onClose={closeProfile}>
                                <NoProfile
                                    imgUrl={imgUrl}
                                    pieceName={pieceName}
                                    screenCase={screenCase}
                                    theme={theme}
                                />
                            </ToolModal>
                        ) : (
                            <ProfileWBDrawer
                                def={def}
                                color={color}
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
                            <ToolModal theme={theme} onClose={closeProfile}>
                                <NoProfile
                                    imgUrl={imgUrl}
                                    pieceName={pieceName}
                                    screenCase={screenCase}
                                    theme={theme}
                                />
                            </ToolModal>
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
