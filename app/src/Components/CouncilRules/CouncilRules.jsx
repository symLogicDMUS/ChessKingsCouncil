import React, {useContext, useState} from "react";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import {useTheme} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {NavBarAlt} from "../Reuseables/NavBar/NavBarAlt";
import {CouncilRulesBody} from "./CouncilRulesBody";
import {useStyles} from "./CouncilRules.jss";
import {ThemeContext} from "../ThemeContext";

function CouncilRules() {
    const themes = useContext(ThemeContext);
    const classes = useStyles({ theme: themes.councilRules });
    const muiTheme = useTheme();

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(
                            classes.menuButton,
                            open && classes.hide
                        )}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        className={clsx(classes.text, {
                            [classes.title]: true,
                        })}
                        noWrap
                        variant="button"
                    >
                        Council Rules
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton
                        onClick={handleDrawerClose}
                        className={classes.text}
                    >
                        {muiTheme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <NavBarAlt
                    theme={themes.councilRules}
                />
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <CouncilRulesBody theme={themes.councilRules} />
            </main>
        </div>
    );
}

export default CouncilRules;