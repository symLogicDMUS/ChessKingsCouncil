import React from "react";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import Typography from "@material-ui/core/Typography";
import { NavBar } from "../Reuseables/NavBar/NavBar";
import { fontSize002 } from "../styles/fontSizes.jss";
import PersistentDrawer from "../Reuseables/PersistentDrawer";
import {Background} from "../Reuseables/Background";
import { useStyles } from "./CouncilRules.jss";

export function CouncilRules() {
    const classes = useStyles({ fontSize: fontSize002 });
    return (
        <div>
            <MediaQuery minDeviceWidth={768}>
                <Background theme='tan' />
                <NavBar
                    theme="tan"
                    currentPage="CouncilRules"
                    screenCase='desktop'
                    unsavedChanges={false}
                />
                <div className={classes.council_rules}>
                    <Box className={classes.parchment_desktop}>
                        <Typography className={classes.title}>
                            Council of Kings
                        </Typography>
                        <Box className={classes.kings_flexbox}>
                            <img
                                className={classes.king_icon}
                                src={`/Images/CouncilRules/king${1}.svg`}
                                alt="icon of a king"
                            />
                            <img
                                className={classes.king_icon}
                                src={`/Images/CouncilRules/king${2}.svg`}
                                alt="icon of a king"
                            />
                            <img
                                className={classes.king_icon}
                                src={`/Images/CouncilRules/king${3}.svg`}
                                alt="icon of a king"
                            />
                            <img
                                className={classes.king_icon}
                                src={`/Images/CouncilRules/king${4}.svg`}
                                alt="icon of a king"
                            />
                            <img
                                className={classes.king_icon}
                                src={`/Images/CouncilRules/king${5}.svg`}
                                alt="icon of a king"
                            />
                            <img
                                className={classes.king_icon}
                                src={`/Images/CouncilRules/king${6}.svg`}
                                alt="icon of a king"
                            />
                        </Box>
                        <Typography className={classes.paragraph}>
                            Council of Kings is 1 of 3 options to play on the
                            site, along with custom and standard Chess. Council
                            of Kings is Chess where Pawns can be promoted to
                            Kings when they reach the back row. The following
                            explains the rules of Council of Kings:
                            <ul className={classes.rule_list}>
                                <li>
                                    Kings can be captured like any other piece
                                    but this isn't required.
                                </li>
                                <li>
                                    To win the game you must checkmate the other
                                    player or capture all of their Kings and
                                    Pawns.
                                </li>
                                <li>
                                    Checkmate in Council of Kings only occurs
                                    when no move can be made to save any king.
                                </li>
                                <li>
                                    You cannot pin pieces: No piece needs to
                                    prevent any King from being put in check.
                                </li>
                                <li>
                                    If 1 or more Kings are already in check, the
                                    player must make a move that saves one of
                                    the Kings.
                                </li>
                            </ul>
                        </Typography>
                    </Box>
                </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={767}>
                <PersistentDrawer
                    drawer={
                        <NavBar
                            currentPage="CouncilRules"
                            screenCase='mobile'
                            redirectMessage={null}
                            theme="tan"
                        />
                    }
                    appBarContent={
                        <Typography variant="h6" noWrap>
                            Council Rules
                        </Typography>
                    }
                    theme="tan"
                >
                    <div className={classes.council_rules}>
                        <img className={classes.scroll_end} src='/Images/CouncilRules/scroll-top.svg' />
                        <Box className={classes.parchment_mobile}>
                            <Typography className={classes.title} noWrap>
                                Council of Kings
                            </Typography>
                            <Box className={classes.kings_flexbox}>
                                <img
                                    className={classes.king_icon}
                                    src={`/Images/CouncilRules/king${1}.svg`}
                                    alt="icon of a king"
                                />
                                <img
                                    className={classes.king_icon}
                                    src={`/Images/CouncilRules/king${2}.svg`}
                                    alt="icon of a king"
                                />
                                <img
                                    className={classes.king_icon}
                                    src={`/Images/CouncilRules/king${3}.svg`}
                                    alt="icon of a king"
                                />
                                <img
                                    className={classes.king_icon}
                                    src={`/Images/CouncilRules/king${4}.svg`}
                                    alt="icon of a king"
                                />
                                <img
                                    className={classes.king_icon}
                                    src={`/Images/CouncilRules/king${5}.svg`}
                                    alt="icon of a king"
                                />
                                <img
                                    className={classes.king_icon}
                                    src={`/Images/CouncilRules/king${6}.svg`}
                                    alt="icon of a king"
                                />
                            </Box>
                            <Typography className={classes.paragraph}>
                                Council of Kings is 1 of 3 options to play on the
                                site, along with custom and standard Chess. Council
                                of Kings is Chess where Pawns can be promoted to
                                Kings when they reach the back row. The following
                                explains the rules of Council of Kings:
                                <ul className={classes.rule_list}>
                                    <li>
                                        Kings can be captured like any other piece
                                        but this isn't required.
                                    </li>
                                    <li>
                                        To win the game you must checkmate the other
                                        player or capture all of their Kings and
                                        Pawns.
                                    </li>
                                    <li>
                                        Checkmate in Council of Kings only occurs
                                        when no move can be made to save any king.
                                    </li>
                                    <li>
                                        You cannot pin pieces: No piece needs to
                                        prevent any King from being put in check.
                                    </li>
                                    <li>
                                        If 1 or more Kings are already in check, the
                                        player must make a move that saves one of
                                        the Kings.
                                    </li>
                                </ul>
                            </Typography>
                        </Box>
                        <img className={classes.scroll_end} src='/Images/CouncilRules/scroll-bottom.svg' />
                    </div>
                </PersistentDrawer>
            </MediaQuery>
        </div>
    );
}
