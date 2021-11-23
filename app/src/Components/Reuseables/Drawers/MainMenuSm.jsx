import React, { useEffect, useState } from "react";
import clsx from "clsx";
import NavBar from "../NavBar/NavBar";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import { NavBarHome } from "../NavBar/NavBarHome";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CssBaseline from "@material-ui/core/CssBaseline";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { MainMenuBody } from "../../Home/Main Menu/MainMenuBody";
import SignInOutButton from "../../Home/Sign In/SignInOutButton";
import { useStyles, homepageBackgroundImages } from "./MainMenuSm.jss";
import ThemeRotation from "../../Home/Main Menu/ThemeRotation/ThemeRotation";
import {appBarHeight} from "./ResponsiveDrawer.jss";

export default function MainMenuSm({ theme, toggleAboutPage }) {
    const classes = useStyles({ theme: theme });
    const muiTheme = useTheme();

    useEffect(() => {
        document.body.className = `${theme}-background`;
        document.documentElement.className = `${theme}-background`;
    }, [theme]);

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
                        Chess King's Council
                    </Typography>
                    <SignInOutButton theme={theme} />
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
                {!!toggleAboutPage ? (
                    <NavBarHome
                        toggleAboutPage={toggleAboutPage}
                        theme={theme}
                    />
                ) : (
                    <NavBar
                        currentPage="MainMenu"
                        redirectMessage={null}
                        additionalSettings={null}
                        theme={theme}
                    />
                )}
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <img
                    className={classes.banner}
                    src={`/Images/home page background images/sm/${homepageBackgroundImages[theme]}`}
                    alt=""
                />
                <MainMenuBody theme={theme} />
            </main>
            <ThemeRotation variant={"sm"} />
        </div>
    );
}
