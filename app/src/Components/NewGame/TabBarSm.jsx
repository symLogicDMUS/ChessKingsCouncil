import React from "react";
import Tabs from "@material-ui/core/Tabs";
import {AppBar, Toolbar, Tooltip} from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import {TabLabel} from "./TabLabel";
import NavBar from "../Reuseables/NavBar/NavBar";
import TemporaryDrawerButton from "../Reuseables/Drawers/TemporaryDrawerButton";
import {GameOptionsHelp} from "./GameOptions/Help/GameOptionsHelp";
import {HelpTitle} from "../Reuseables/NavBar/Help/HelpTitle";
import {PageTitle} from "../Reuseables/AppBar/PageTitle";
import { useStyles } from "./TabBarSm.jss";

export function TabBarSm(props) {
    const {theme, value, onChange, gameName, gameType, playerType, ...other} = props;

    const classes = useStyles({theme});

    return (
        <div className={classes.root} {...other}>
            <Toolbar>
                <TemporaryDrawerButton theme={theme}>
                    <NavBar
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
                </TemporaryDrawerButton>
                <PageTitle theme={theme}>New Game</PageTitle>
            </Toolbar>
            <AppBar position="fixed">
                <Tabs
                    value={value}
                    onChange={onChange}
                    variant={"fullWidth"}
                    indicatorColor={"secondary"}
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
    )
}