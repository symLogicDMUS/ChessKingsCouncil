import React from "react";
import MediaQuery from "react-responsive/src";
import Box from "@material-ui/core/Box";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {IconButton, Portal, Typography} from "@material-ui/core";
import {NoProfile} from "../../PieceProfiles/ProfileWB/NoProfile";
import {ProfileWBDrawer} from "../../PieceProfiles/ProfileWB/ProfileWBDrawer";
import {ProfileWBModal} from "../../PieceProfiles/ProfileWB/ProfileWBModal";
import {ProfileWB} from "../../PieceProfiles/ProfileWB/ProfileWB";
import {getColorName} from "../../helpers/getColorName";
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
    const classes = useStyles({theme: theme});
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
                        >
                            <Box className={classes.piece_header}>
                                <IconButton onClick={closeProfile} edge='end' className={classes.icon_button}>
                                    <ChevronRightIcon className={classes.icon} />
                                </IconButton>
                                <Typography variant="h6" noWrap className={classes.piece_name}>
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
