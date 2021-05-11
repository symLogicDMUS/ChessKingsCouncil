import React, {useContext, useState} from "react";
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import {Close} from "../Modals/Close";
import Box from "@material-ui/core/Box";
import {Dialog, Typography} from "@material-ui/core";
import ThemeDropdown from "../UserInput/ThemeDropdown";
import MuiAccordion from "../Accordions/MuiAccordion";
import {ThemeContext} from "../../ThemeContext";
import Button from "@material-ui/core/Button";
import {AnimatePresencePortal} from "../Animations/AnimatePresencePortal";
import ThemeSavedSuccessfully from "../../CreatePiece/animations/ThemeSavedSuccessfully";
import {useStyles} from "./SettingsModal.jss";

export function SettingsModal(props) {
    const {themes, setThemes} = useContext(ThemeContext);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const classes = useStyles({theme: props.theme});

    const saveTheme = async () => {
        const user = firebase.auth().currentUser;
        const uid = user.uid;
        firebase.database().ref().child(`themes/${uid}`).set(themes).then(r => {
            setSaveSuccess(true);
        }).catch((err) => {
                console.log(`ERROR: ${err}`)
            })
    };

    return (
        <>
            <AnimatePresencePortal>
                <ThemeSavedSuccessfully theme={props.theme} callback={() => setSaveSuccess(false)} />
            </AnimatePresencePortal>
            <Dialog
                open={true}
                classes={{
                    paper: classes.window
                }}
                onBackdropClick={props.closeModal}
            >
                <Box className={classes.close_area}>
                    <Close
                        onClick={props.closeModal}
                        theme={props.theme}
                        className={classes.close}
                        iconClassName={classes.close_icon}
                    />
                </Box>
                <Box className={classes.settings}>
                    <MuiAccordion
                        className={classes.accordion}
                        heading={
                            <Typography
                                className={classes.accordion_summary}
                                noWrap
                            >
                                New Game Page
                            </Typography>
                        }
                    >
                        <ThemeDropdown theme={props.theme} pageName={'newGame'} defaultValue={themes.newGame} />
                    </MuiAccordion>
                    <MuiAccordion
                        className={classes.accordion}
                        heading={
                            <Typography
                                className={classes.accordion_summary}
                                noWrap
                            >
                                Load Game
                            </Typography>
                        }
                    >
                        <ThemeDropdown theme={props.theme} pageName={'loadGame'} defaultValue={themes.loadGame} />
                    </MuiAccordion>
                    <MuiAccordion
                        className={classes.accordion}
                        heading={
                            <Typography
                                className={classes.accordion_summary}
                                noWrap
                            >
                                Create Piece
                            </Typography>
                        }
                    >
                        <ThemeDropdown theme={props.theme} pageName={'createPiece'} defaultValue={themes.createPiece} />
                    </MuiAccordion>
                    <MuiAccordion
                        className={classes.accordion}
                        heading={
                            <Typography
                                className={classes.accordion_summary}
                                noWrap
                            >
                                Customize Game
                            </Typography>
                        }
                    >
                        <ThemeDropdown theme={props.theme} pageName={'customize'} defaultValue={themes.customize} />
                    </MuiAccordion>
                    <MuiAccordion
                        className={classes.accordion}
                        heading={
                            <Typography
                                className={classes.accordion_summary}
                                noWrap
                            >
                                Playing Game page
                            </Typography>
                        }
                    >
                        <ThemeDropdown theme={props.theme} pageName={'gameRoot'} defaultValue={themes.gameRoot} />
                    </MuiAccordion>
                    <MuiAccordion
                        className={classes.accordion}
                        heading={
                            <Typography
                                className={classes.accordion_summary}
                                noWrap
                            >
                                Saved Pieces
                            </Typography>
                        }
                    >
                        <ThemeDropdown theme={props.theme} pageName={'myPieces'} defaultValue={themes.myPieces} />
                    </MuiAccordion>
                    <MuiAccordion
                        className={classes.accordion}
                        heading={
                            <Typography
                                className={classes.accordion_summary}
                                noWrap
                            >
                                Home Page
                            </Typography>
                        }
                    >
                        <ThemeDropdown theme={props.theme} pageName={'home'} defaultValue={themes.home} />
                    </MuiAccordion>
                    <MuiAccordion
                        className={classes.accordion}
                        heading={
                            <Typography
                                className={classes.accordion_summary}
                                noWrap
                            >
                                Council Rules
                            </Typography>
                        }
                    >
                        <ThemeDropdown theme={props.theme} pageName={'councilRules'} defaultValue={themes.councilRules} />
                    </MuiAccordion>
                    <Button onClick={saveTheme} className={classes.save_theme_button} variant={'contained'}>
                        Save For next visit
                    </Button>
                    {props.children}
                </Box>
            </Dialog>
        </>
    )
}

/*

* */