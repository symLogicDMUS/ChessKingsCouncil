import React, {useContext, useState} from "react";
import {saveThemes} from "../../../API/saveThemes";
import {Close} from "../Modals/Close";
import Box from "@material-ui/core/Box";
import {Undo} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import {Dialog, DialogActions, Typography} from "@material-ui/core";
import {AnimatePresencePortal} from "../Animations/AnimatePresencePortal";
import ThemeSavedSuccessfully from "../../CreatePiece/animations/ThemeSavedSuccessfully";
import ThemeDropdown from "../UserInput/ThemeDropdown";
import MuiAccordion from "../Accordions/MuiAccordion";
import AskLoginButton from "../../Home/AskLoginButton";
import {ThemeContext} from "../../ThemeContext";
import {UserContext} from "../../../UserContext";
import {useStyles} from "./SettingsModal.jss";

export function SettingsModal(props) {
    const uid = useContext(UserContext)
    const {themes, setThemes} = useContext(ThemeContext);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const classes = useStyles({theme: props.theme});

    const saveThemesToDb = () => {
        saveThemes(themes).then(r => {
            setSaveSuccess(true)
        })
    };

    const resetDefaults = () => {
        saveThemes({
                newGame: 'tan',
                loadGame: 'tan',
                createPiece: 'dark',
                customize: 'dark',
                gameRoot: 'dark',
                myPieces: 'dark',
                councilRules: 'tan',
                home: 'tan',
            }
        ).then(r => {
            setSaveSuccess(true)
        })
    };

    return (
        <>
            {saveSuccess && (
                <AnimatePresencePortal>
                    <ThemeSavedSuccessfully
                        theme={props.theme}
                        callback={() => {
                            setSaveSuccess(false)
                            props.closeModal()
                        }}
                    />
                </AnimatePresencePortal>
            )}
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
                    <DialogActions className={classes.dialog_actions}>
                        {uid ? (
                            <Button onClick={saveThemesToDb} className={classes.save_theme_button} variant={'contained'}>
                                Save For next visit
                            </Button>
                        ) : (
                            <AskLoginButton theme={props.theme} buttonType='theme' />
                        )}
                        <Button onClick={resetDefaults}
                                startIcon={<Undo />}
                                className={classes.reset_theme_button}
                                variant={'contained'}
                        >
                            Reset defaults
                        </Button>
                    </DialogActions>
                    {props.children}
                </Box>
            </Dialog>
        </>
    )
}
