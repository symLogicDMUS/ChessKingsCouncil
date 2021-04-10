import React, {memo} from "react";
import MediaQuery from "react-responsive/src";
import {Button, Portal} from "@material-ui/core";
import { NoProfile } from "../../PieceProfiles/ProfileWB/NoProfile";
import { ProfileWBDrawer } from "../../PieceProfiles/ProfileWB/Drawer/ProfileWBDrawer";
import { ProfileWBModal } from "../../PieceProfiles/ProfileWB/ProfileWBModal";
import { ToolModal } from "../../NewGame/Customize/ToolModal";
import IconButton from "@material-ui/core/IconButton";
import { useStyles } from "./AnalysisPiece.jss";

export const AnalysisPiece = memo(({
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
                            <ToolModal theme={theme} contentClassName={classes.tool_modal} onClose={closeProfile}>
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
                            <ToolModal theme={theme} contentClassName={classes.tool_modal} onClose={closeProfile}>
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
            <Button className={classes.piece_button}>
                <img
                    src={imgUrl}
                    className={classes.piece_img}
                    onClick={rf === selectedSqr ? closeProfile : openProfile}
                    alt={`${alt} (icon of a piece)`}
                />
            </Button>
        </>
    );
});
