import React, {useState} from "react";
import Toolbar from "@material-ui/core/Toolbar";
import NavBar from "../Reuseables/NavBar/NavBar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {AppBar, IconButton, Tooltip} from "@material-ui/core";
import {GameOptionsHelp} from "./GameOptions/Help/GameOptionsHelp";
import {HelpTitle} from "../Reuseables/NavBar/Help/HelpTitle";
import {PageTitle} from "../Reuseables/AppBar/PageTitle";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {TabLabel} from "./TabLabel";
import {useStyles} from "./TabBarLg.jss";

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
                    <Toolbar className={classes.tab_bar}>
                        <IconButton
                            onClick={() => setRowOpen(true)}
                            className
                            edge={"start"}
                        >
                            <MenuIcon className={classes.menu_icon}/>
                        </IconButton>
                        <PageTitle theme={theme}>New Game</PageTitle>
                        <Box className={classes.tabs}>
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
                        </Box>
                    </Toolbar>
                </div>
            )}
        </>
    )

}