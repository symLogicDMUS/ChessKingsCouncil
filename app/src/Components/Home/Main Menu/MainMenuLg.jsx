import { Box } from "@material-ui/core";
import "../../styles/Background/_backgrounds.scss";
import React, { useEffect, useState, useMemo } from "react";
import MainMenuSm from "../../Reuseables/Drawers/MainMenuSm";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { ReactComponent as Title } from "./main menu text/title.svg";
import {
    homepageBackgroundImages,
    topAreaHeight,
    useStyles,
} from "./MainMenuLg.jss";
import NavBar from "../../Reuseables/NavBar/NavBar";
import { themes } from "../../styles/themes/themes.jss";

function MainMenuLg(props) {
    useEffect(() => {
        document.body.className = `${props.theme}-background`;
    }, [props.theme]);

    const [about, setAbout] = useState(false);

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
            {about ? (
                <MainMenuSm
                    theme={props.theme}
                    toggleAboutPage={() => setAbout(false)}
                />
            ) : (
                <ThemeProvider theme={muiTheme}>
                    <Box className={classes.main_menu_container}>
                        <Title className={classes.title} />
                    </Box>
                    <NavBar
                        show={true}
                        fullWidth={true}
                        lgDirection={"row"}
                        currentPage="Home"
                        redirectMessage={null}
                        additionalSettings={null}
                        theme={props.theme}
                        style={{ position: "fixed", top: topAreaHeight }}
                        className={classes.navBar}
                    />
                    <img
                        className={classes.banner}
                        src={`/Images/home page background images/${
                            homepageBackgroundImages[props.theme]
                        }`}
                        alt=""
                    />
                </ThemeProvider>
            )}
        </>
    );
}

export default MainMenuLg;
