import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Hidden from "@material-ui/core/Hidden";
import "../../styles/Background/_backgrounds.scss";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarSmScreen from "../AppBar/AppBarSmScreen";
import AppBarLgScreen from "../AppBar/AppBarLgScreen";
import MiniVariantDrawer from "./MiniVariantDrawer";
import PermanentDrawerRight from "./PermanentDrawerRight";
import PermanentDrawerLeft from "./PermanentDrawerLeft";
import PersistentDrawerLeft from "./PersistantDrawerLeft";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useStyles } from "./ResponsiveDrawer.jss";

/**
 * @on left of screen: navBar is in open/close drawer for screen width 960px down and in permanent drawer for 960px up
 * @on right of screen: tools of page in permanent drawer for 960px up and tool buttons that open modals with tools onClick, for 960px down.
 * @some pages have navBar spanning top instead of left and right drawers, which changes how main content is displayed.
 *  this is indicated by the boolean prop 'navHorizontal'.
 */
function ResponsiveDrawer(props) {
    const {
        navBar,
        theme,
        tools,
        toolButtons,
        navHorizontal,
        appBarContent,
        appBarClassName,
        contentClassName,
        className,
        elevation,
        minABPadding,
        children,
        ...other
    } = props;

    const classes = useStyles({ theme: theme });
    const lg = useMediaQuery("(min-width:960px)");
    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    useEffect(() => {
        document.body.className = `${theme}-background`;
    }, [theme]);

    return (
        <div
            className={clsx(classes.root, {
                [className]: className,
            })}
            {...other}
        >
            <CssBaseline />
            <Hidden mdUp>
                <AppBarSmScreen
                    open={open}
                    theme={theme}
                    elevation={elevation}
                    isIconColumn={!!tools}
                    className={appBarClassName}
                    handleDrawerToggle={handleDrawerToggle}
                >
                    {appBarContent}
                </AppBarSmScreen>
                <PersistentDrawerLeft
                    open={open}
                    theme={theme}
                    isHidden={navHorizontal}
                    handleDrawerToggle={handleDrawerToggle}
                >
                    {navBar}
                </PersistentDrawerLeft>
                {toolButtons && (
                    <MiniVariantDrawer theme={theme}>
                        {toolButtons}
                    </MiniVariantDrawer>
                )}
            </Hidden>
            <Hidden smDown>
                <AppBarLgScreen
                    theme={theme}
                    isHidden={navHorizontal}
                    minPadding={minABPadding}
                    className={appBarClassName}
                    onMenuButtonClick={handleDrawerToggle}
                >
                    {appBarContent}
                </AppBarLgScreen>
                <PermanentDrawerLeft
                    theme={theme}
                    isHidden={navHorizontal}
                    ariaLabel="navBar"
                >
                    {navBar}
                </PermanentDrawerLeft>
                <PermanentDrawerRight
                    theme={theme}
                    isHidden={navHorizontal}
                    ariaLabel="tools"
                >
                    {tools}
                </PermanentDrawerRight>
            </Hidden>
            <main>
                {navHorizontal ? navBar : <div className={classes.toolbar} />}
                <div
                    className={clsx(classes.mainContent, {
                        [contentClassName]: contentClassName,
                        [classes.lgMainWithNB]: lg && navHorizontal,
                        [classes.lgMainWithDrawer]: lg && !navHorizontal,
                        [classes.smMainWithMiniVariant]: !lg && toolButtons,
                        [classes.smMainFull]: !lg && !toolButtons,
                        [classes.smMain]: !lg,
                    })}
                >
                    {children}
                </div>
            </main>
        </div>
    );
}

export default ResponsiveDrawer;
