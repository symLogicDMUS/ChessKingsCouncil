import React, {useState} from "react";
import Toolbar from "@material-ui/core/Toolbar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {AppBar, IconButton, Tooltip} from "@material-ui/core";
import {GameOptionsHelp} from "./GameOptions/Help/GameOptionsHelp";
import {HelpTitle} from "../Reuseables/NavBar/Help/HelpTitle";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {TabLabel} from "./TabLabel";
import {useStyles} from "./TabBarLg.jss";
import {MenuFab} from "./MenuFab";

const NavBar = React.lazy(() => import('../Reuseables/NavBar/NavBar'));

export function TabBarLg(props) {

    const {theme, value, onChange, gameName, gameType, playerType, ...other} = props;

    const [rowOpen, setRowOpen] = useState(false);

    const classes = useStyles({theme});

    return (
        <>
            {rowOpen ? (
                <div className={classes.root1} {...other}>
                    <Toolbar className={classes.tab_bar}>
                        <IconButton
                            edge="end"
                            onClick={() => setRowOpen(false)}
                        >
                            <ArrowBackIcon className={classes.close_icon}/>
                        </IconButton>
                        <NavBar
                            show={rowOpen}
                            fullWidth={false}
                            lgDirection={"row"}
                            currentPage="NewGame"
                            helpText={GameOptionsHelp(theme)}
                            helpTitle={
                                <HelpTitle theme={theme} fontSize="2.6vh">
                                    New Game
                                </HelpTitle>
                            }
                            redirectMessage={null}
                            additionalSettings={null}
                            theme={theme}
                        />
                    </Toolbar>
                </div>
            ) : (
                <div className={classes.root2} {...other}>
                    <MenuFab
                        onClick={() => setRowOpen(true)}
                        classes={classes}
                        theme={theme}
                    />
                    <AppBar>
                        <Tabs
                            value={value}
                            onChange={onChange}
                            indicatorColor={"secondary"}
                            centered
                        >
                            <Tooltip title={"Game Name" + " (" + gameName + ")"}>
                                <Tab
                                    id="game-name"
                                    label={<TabLabel addOn={gameName}>Game Name</TabLabel>}
                                />
                            </Tooltip>
                            <Tooltip title={"Pick Type" + " (" + gameType + ")"}>
                                <Tab
                                    id="pick-type"
                                    label={<TabLabel addOn={gameType}>Pick Type</TabLabel>}
                                />
                            </Tooltip>
                            <Tooltip title={"Play As" + " (" + playerType + ")"}>
                                <Tab
                                    id="play-as"
                                    label={<TabLabel addOn={playerType}>Play As</TabLabel>}
                                />
                            </Tooltip>
                        </Tabs>
                    </AppBar>
                </div>
            )}
        </>
    )

}