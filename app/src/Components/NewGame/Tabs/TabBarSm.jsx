import React from "react";
import {TabLabel} from "./TabLabel";
import Tabs from "@material-ui/core/Tabs";
import {getTooltips} from "./getTooltips";
import Tab from "@material-ui/core/Tab";
import NavBar from "../../Reuseables/NavBar/NavBar";
import {AppBar, Toolbar, Tooltip} from "@material-ui/core";
import TemporaryDrawerButton from
        "../../Reuseables/Drawers/TemporaryDrawerButton";
import {PageTitle} from "../../Reuseables/AppBar/PageTitle";
import { useStyles } from "./TabBarSm.jss";

export function TabBarSm(props) {
    const {theme, value, onChange, gameName, gameType, playerType, ...other} = props;

    const classes = useStyles({theme});

    let {
        gameNameTooltipTitle,
        gameTypeTooltipTitle,
        playerTypeTooltipTitle
    } = getTooltips(gameName, gameType, playerType);

    return (
        <div className={classes.root} {...other}>
            <Toolbar>
                <TemporaryDrawerButton theme={theme}>
                    <NavBar
                        currentPage="NewGame"
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
                    <Tooltip title={gameNameTooltipTitle}>
                        <Tab
                            id="game-name"
                            label={<TabLabel addOn={gameName}>Game Name</TabLabel>}
                        />
                    </Tooltip>
                    <Tooltip title={gameTypeTooltipTitle}>
                        <Tab
                            id="pick-type"
                            label={<TabLabel addOn={gameType}>Pick Type</TabLabel>}
                        />
                    </Tooltip>
                    <Tooltip title={playerTypeTooltipTitle}>
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

export default TabBarSm;