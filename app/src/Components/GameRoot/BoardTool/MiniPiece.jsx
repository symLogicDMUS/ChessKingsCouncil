import React from "react";
import {Portal} from "@material-ui/core";
import MediaQuery from "react-responsive/src";
import {NoProfile} from "../../PieceProfiles/ProfileWB/NoProfile";
import {ProfileWBDrawer} from "../../PieceProfiles/ProfileWB/ProfileWBDrawer";
import {ProfileWBModal} from "../../PieceProfiles/ProfileWB/ProfileWBModal";
import {useStyles} from "./MiniPiece.jss";

export function MiniPiece({
                              rf,
                              def,
                              color,
                              isSpecial,
                              pieceName,
                              selectedSqr,
                              openProfile,
                              closeProfile,
                              screenCase,
                              theme,
                              pieceImgBase64Str,
                              alt,
                          }) {
    const classes = useStyles();
    return (
        <>
            <MediaQuery maxDeviceWidth={1040}>
                <Portal>
                    {(isSpecial && rf === selectedSqr) ? (
                        <NoProfile
                            color={color}
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
                        />
                    )}
                </Portal>
            </MediaQuery>
            <MediaQuery minDeviceWidth={1040}>
                {(rf === selectedSqr) ? (
                    <Portal>
                        {isSpecial ? (
                            <NoProfile
                                color={color}
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
                src={pieceImgBase64Str}
                className={classes.piece}
                onClick={(rf === selectedSqr) ? closeProfile : openProfile}
                alt={`${alt} (icon of a piece)`}
            />
        </>
    );
}
