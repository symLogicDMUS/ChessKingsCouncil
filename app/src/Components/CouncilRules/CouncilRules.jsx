import React from "react";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import Typography from "@material-ui/core/Typography";
import {NavBar} from "../Reuseables/NavBar/NavBar";
import {fontSize002, fontSizeW0045} from "../styles/fontSizes.jss";
import PersistentDrawer from "../Reuseables/Drawers/PersistentDrawer";
import {Background} from "../Reuseables/Background/Background";
import {doNothing} from "../helpers/doNothing";
import {themes} from "../styles/themes.jss";
import {useStyles} from "./CouncilRules.jss";

function CouncilRules() {
    const classes = useStyles({fontSize: fontSize002});

    return (
        <div>
            <MediaQuery minWidth={960}>
                <Background theme='tan' navBar={true} currentPage='CouncilRules'/>
                <NavBar
                    theme="tan"
                    currentPage="CouncilRules"
                    screenCase='wide'
                    unsavedChanges={false}
                    helpText={null}
                    helpTitle={null}
                    updateTheme={doNothing}
                />
                <div className={classes.council_rules}>
                    <Box className={classes.parchment_wide}>
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
            <MediaQuery maxWidth={960}>
                <PersistentDrawer
                    drawer={
                        <NavBar
                            theme="tan"
                            currentPage="CouncilRules"
                            screenCase="thin"
                            unsavedChanges={false}
                            helpText={[
                                <Typography
                                    style={{fontSize: fontSizeW0045, color: themes.tan.text}}
                                    variant='h6'
                                >
                                    No help content for this page.
                                </Typography>
                            ]}
                            updateTheme={doNothing}
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
                        <Box className={classes.scroll_end_container}>
                            <img className={classes.scroll_end} src={'/Images/CouncilRules/scroll-top.svg'} alt={"top of ancient scroll graphic"}/>
                        </Box>
                        <Box className={classes.parchment_thin}>
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
                        <Box className={classes.scroll_end_container}>
                            <img className={classes.scroll_end} src={'/Images/CouncilRules/scroll-bottom.svg'} alt={"bottom of ancient scroll graphic"}/>
                        </Box>
                    </div>
                </PersistentDrawer>
            </MediaQuery>
        </div>
    );
}

export default CouncilRules;