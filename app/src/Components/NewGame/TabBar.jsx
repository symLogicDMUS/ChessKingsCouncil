import React, {useState} from "react";
import * as PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import {AppBar, IconButton} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import NavBar from "../Reuseables/NavBar/NavBar";
import {ChevronLeft} from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import {PageTitle} from "../Reuseables/AppBar/PageTitle";
import {HelpTitle} from "../Reuseables/NavBar/Help/HelpTitle";
import {GameOptionsHelp} from "./GameOptions/Help/GameOptionsHelp";
import {useStyles} from "./TabBar.jss";

function TabBar(props) {
    const {theme, value, onChange, wide} = props;
    const [rowOpen, setRowOpen] = useState(false);
    const classes = useStyles({theme});

    return (
        <>
            {rowOpen ? (
                <div className={classes.root1}>
                    <Toolbar className={classes.tab_bar}>
                        <IconButton
                            edge="end"
                            onClick={() => setRowOpen( false)}
                        >
                            <ChevronLeft color={"secondary"} />
                        </IconButton>
                        <NavBar
                            fullWidth={false}
                            lgDirection={"row"}
                            currentPage="NewGame"
                            helpText={GameOptionsHelp(theme)}
                            helpTitle={<HelpTitle theme={theme} fontSize='2.6vh'>New Game</HelpTitle>}
                            redirectMessage={null}
                            additionalSettings={null}
                            theme={theme}
                        />
                    </Toolbar>
                </div>
            ) : (
                <div className={classes.root2}>
                    <AppBar>
                        <Toolbar className={classes.tab_bar}>
                            <IconButton
                                onClick={() => setRowOpen( true)}
                                className
                                edge={"start"}
                            >
                                <MenuIcon className={classes.menu_icon} />
                            </IconButton>
                            <PageTitle theme={theme}>
                                New Game
                            </PageTitle>
                            <Box className={classes.tabs}>
                                <Tabs
                                    value={value}
                                    onChange={onChange}
                                    indicatorColor={"secondary"}
                                    centered
                                >
                                    <Tab label="Game Name" id='game-name'/>
                                    <Tab label="Pick Type" id='pick-type'/>
                                    <Tab label="Play As" id='play-as'/>
                                </Tabs>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </div>
            )}
        </>
    );
}

TabBar.propTypes = {
    classes: PropTypes.any,
    value: PropTypes.number,
    onChange: PropTypes.func,
    wide: PropTypes.bool
};

export default TabBar;