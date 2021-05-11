import React, {useContext} from "react";
import {Close} from "../Modals/Close";
import Box from "@material-ui/core/Box";
import {Dialog, Typography} from "@material-ui/core";
import ThemeDropdown from "../UserInput/ThemeDropdown";
import MuiAccordion from "../Accordions/MuiAccordion";
import {useStyles} from "./SettingsModal.jss";
import {ThemeContext} from "../../ThemeContext";

export function SettingsModal(props) {
    const {themes, setThemes} = useContext(ThemeContext)
    const classes = useStyles({theme: props.theme});

    return (
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
                {props.children}
            </Box>
        </Dialog>
    )
}