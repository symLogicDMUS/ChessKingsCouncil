import React, {useState} from "react";
import {getTooltips} from "./getTooltips";
import Toolbar from "@material-ui/core/Toolbar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {AppBar, IconButton, Tooltip} from "@material-ui/core";
import {GameOptionsHelp} from "../GameOptions/Help/GameOptionsHelp";
import {HelpTitle} from "../../Reuseables/NavBar/Help/HelpTitle";
import NavBar from "../../Reuseables/NavBar/NavBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {TabLabel} from "./TabLabel";
import {MenuFab} from "./MenuFab";
import {useStyles} from "./TabBarLg.jss";

function TabBarLg(props) {

    const {theme, value, onChange, gameName, gameType, playerType, ...other} = props;

    const [rowOpen, setRowOpen] = useState(false);

    const classes = useStyles({theme});

    let {
        gameNameTooltipTitle,
        gameTypeTooltipTitle,
        playerTypeTooltipTitle
    } = getTooltips(gameName, gameType, playerType);


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
            )}
        </>
    )
}

export default TabBarLg;