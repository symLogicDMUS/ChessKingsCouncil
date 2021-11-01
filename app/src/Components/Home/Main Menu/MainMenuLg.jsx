import { Box } from "@material-ui/core";
import {YouTube} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import React, { useEffect, useMemo } from "react";
import "../../styles/Background/_backgrounds.scss";
import NavBar from "../../Reuseables/NavBar/NavBar";
import { themes } from "../../styles/themes/themes.jss";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { ReactComponent as Title } from "./main menu text/title.svg";
import {homepageBackgroundImages, useStyles} from "./MainMenuLg.jss";

function MainMenuLg(props) {
    useEffect(() => {
        document.body.className = `${props.theme}-background`;
    }, [props.theme]);

    const classes = useStyles({ theme: props.theme });

    const muiTheme = useMemo(
        () =>
            createMuiTheme({
                palette: {
                    primary: {
                        main: themes[props.theme].fill,
                    },
                },
            }),
        [props.theme]
    );

    return (
        <>
            <ThemeProvider theme={muiTheme}>
                <NavBar
                    show={true}
                    fullWidth={true}
                    theme={props.theme}
                    lgDirection={"row"}
                    currentPage="Home"
                    redirectMessage={null}
                    additionalSettings={null}
                    className={classes.navBar}
                    style={{ position: "fixed", boxShadow: 'unset', background: 'rgba(0, 0, 0, 0)'}}
                />
                <Box
                    style={{
                        width: '100vw',
                        height: 120,
                        position: 'fixed',
                        top: 0,
                        background: `linear-gradient(${themes[props.theme].fill}, rgba(0,0,0,0))`
                    }}
                />
                <img
                    className={classes.banner}
                    src={`/Images/home page background images/${
                        homepageBackgroundImages[props.theme]
                    }`}
                    alt=""
                />
                <div className={classes.content}>
                    <Title className={classes.title} />
                    <Button
                        size={"large"}
                        color={"secondary"}
                        variant={"contained"}
                        startIcon={<YouTube />}
                        onClick={() => window.location.href = "https://youtu.be/JMfDZIoA5xA"}
                    >
                        Watch Demo
                    </Button>
                </div>
            </ThemeProvider>
        </>
    );
}

export default MainMenuLg;
