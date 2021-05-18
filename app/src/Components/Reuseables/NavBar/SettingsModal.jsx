import React, { useContext, useState } from "react";
import clsx from "clsx";
import { Close } from "../Modals/Close";
import Box from "@material-ui/core/Box";
import { Undo } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import { saveThemes } from "../../../API/saveThemes";
import {Dialog, DialogActions, DialogContentText, DialogTitle, Typography} from "@material-ui/core";
import { AnimatePresencePortal } from "../Animations/AnimatePresencePortal";
import ThemeSavedSuccessfully from "../Animations/ThemeSavedSuccessfully";
import ThemeDropdown from "../UserInput/ThemeDropdown";
import MuiAccordion from "../Accordions/MuiAccordion";
import AskLoginButton from "../../Home/AskLoginButton";
import { ThemeContext } from "../../ThemeContext";
import { UserContext } from "../../../UserContext";
import { useStyles } from "./SettingsModal.jss";

export function SettingsModal(props) {
    const {currentPage, closeModal, theme, children, ...other} = props;
    
    const uid = useContext(UserContext);
    const { themes, setThemes } = useContext(ThemeContext);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const classes = useStyles({ theme: theme });

    const saveThemesToDb = () => {
        saveThemes(themes).then((r) => {
            setSaveSuccess(true);
        });
    };

    const resetDefaults = () => {
        saveThemes({
            newGame: "tan",
            loadGame: "tan",
            createPiece: "dark",
            customize: "dark",
            gameRoot: "dark",
            myPieces: "dark",
            councilRules: "tan",
            home: "tan",
        }).then((r) => {
            setSaveSuccess(true);
        });
    };
    const added = "(Current Page)";

    return (
        <>
            {saveSuccess && (
                <AnimatePresencePortal>
                    <ThemeSavedSuccessfully
                        theme={theme}
                        callback={() => {
                            setSaveSuccess(false);
                            closeModal();
                        }}
                    />
                </AnimatePresencePortal>
            )}
            <Dialog
                open={true}
                classes={{
                    paper: classes.window,
                }}
                onBackdropClick={closeModal}
                {...other}
            >
                <Box className={classes.close_area}>
                    <Close
                        theme={theme}
                        onClick={closeModal}
                        className={classes.close}
                        iconClassName={classes.close_icon}
                    />
                </Box>
                <DialogTitle className={classes.normal}>Theme</DialogTitle>
                <Box className={classes.settings}>
                    <MuiAccordion
                        className={classes.accordion}
                        heading={
                            <Typography
                                className={classes.accordion_summary}
                                variant={'button'}
                                noWrap
                            >
                                All Pages
                            </Typography>
                        }
                    >
                        <ThemeDropdown
                            theme={theme}
                            pageName={"all"}
                        />
                    </MuiAccordion>
                    <MuiAccordion
                        className={classes.accordion}
                        heading={
                            <Typography
                                className={clsx(classes.accordion_summary, {
                                    [classes.highlight]:
                                        currentPage === "MainMenu",
                                    [classes.normal]: currentPage !== "MainMenu",
                                })}
                                noWrap
                            >
                                Home Page{" "}
                                {currentPage === "MainMenu" && added}
                            </Typography>
                        }
                    >
                        <ThemeDropdown
                            theme={theme}
                            pageName={"home"}
                            defaultValue={themes.home}
                        />
                    </MuiAccordion>
                    <MuiAccordion
                        className={classes.accordion}
                        heading={
                            <Typography
                                className={clsx(classes.accordion_summary, {
                                    [classes.highlight]:
                                        currentPage === "NewGame",
                                    [classes.normal]: currentPage !== "NewGame",
                                })}
                                noWrap
                            >
                                New Game{" "}
                                {currentPage === "NewGame" && added}
                            </Typography>
                        }
                    >
                        <ThemeDropdown
                            theme={theme}
                            pageName={"newGame"}
                            defaultValue={themes.newGame}
                        />
                    </MuiAccordion>
                    <MuiAccordion
                        className={classes.accordion}
                        heading={
                            <Typography
                                className={clsx(classes.accordion_summary, {
                                    [classes.highlight]:
                                        currentPage === "LoadGame",
                                    [classes.normal]: currentPage !== "LoadGame",
                                })}
                                noWrap
                            >
                                Load Game{" "}
                                {currentPage === "LoadGame" && added}
                            </Typography>
                        }
                    >
                        <ThemeDropdown
                            theme={theme}
                            pageName={"loadGame"}
                            defaultValue={themes.loadGame}
                        />
                    </MuiAccordion>
                    <MuiAccordion
                        className={classes.accordion}
                        heading={
                            <Typography
                                className={clsx(classes.accordion_summary, {
                                    [classes.highlight]:
                                        currentPage === "CreatePiece",
                                    [classes.normal]: currentPage !== "CreatePiece",
                                })}
                                noWrap
                            >
                                Create Piece{" "}
                                {currentPage === "CreatePiece" && added}
                            </Typography>
                        }
                    >
                        <ThemeDropdown
                            theme={theme}
                            pageName={"createPiece"}
                            defaultValue={themes.createPiece}
                        />
                    </MuiAccordion>
                    <MuiAccordion
                        className={classes.accordion}
                        heading={
                            <Typography
                                className={clsx(classes.accordion_summary, {
                                    [classes.highlight]:
                                        currentPage === "Customize",
                                    [classes.normal]: currentPage !== "Customize",
                                })}
                                noWrap
                            >
                                Customize Game{" "}
                                {currentPage === "Customize" && added}
                            </Typography>
                        }
                    >
                        <ThemeDropdown
                            theme={theme}
                            pageName={"customize"}
                            defaultValue={themes.customize}
                        />
                    </MuiAccordion>
                    <MuiAccordion
                        className={classes.accordion}
                        heading={
                            <Typography
                                className={clsx(classes.accordion_summary, {
                                    [classes.highlight]:
                                        currentPage === "GameRoot",
                                    [classes.normal]: currentPage !== "GameRoot",
                                })}
                                noWrap
                            >
                                Playing Game page{" "}
                                {currentPage === "GameRoot" && added}
                            </Typography>
                        }
                    >
                        <ThemeDropdown
                            theme={theme}
                            pageName={"gameRoot"}
                            defaultValue={themes.gameRoot}
                        />
                    </MuiAccordion>
                    <MuiAccordion
                        className={classes.accordion}
                        heading={
                            <Typography
                                className={clsx(classes.accordion_summary, {
                                    [classes.highlight]:
                                        currentPage === "MyPieces",
                                    [classes.normal]: currentPage !== "MyPieces",
                                })}
                                noWrap
                            >
                                Saved Pieces{" "}
                                {currentPage === "MyPieces" && added}
                            </Typography>
                        }
                    >
                        <ThemeDropdown
                            theme={theme}
                            pageName={"myPieces"}
                            defaultValue={themes.myPieces}
                        />
                    </MuiAccordion>
                    <MuiAccordion
                        className={classes.accordion}
                        heading={
                            <Typography
                                className={clsx(classes.accordion_summary, {
                                    [classes.highlight]:
                                        currentPage === "CouncilRules",
                                    [classes.normal]: currentPage !== "CouncilRules",
                                })}
                                noWrap
                            >
                                Council Rules{" "}
                                {currentPage === "CouncilRules" && added}
                            </Typography>
                        }
                    >
                        <ThemeDropdown
                            theme={theme}
                            pageName={"councilRules"}
                            defaultValue={themes.councilRules}
                        />
                    </MuiAccordion>
                    <DialogActions className={classes.dialog_actions}>
                        {uid ? (
                            <Button
                                onClick={saveThemesToDb}
                                className={classes.save_theme_button}
                                variant={"contained"}
                            >
                                Save For next visit
                            </Button>
                        ) : (
                            <AskLoginButton
                                theme={theme}
                                buttonType="theme"
                                isGameOption={false}
                            />
                        )}
                        <Button
                            onClick={resetDefaults}
                            startIcon={<Undo />}
                            className={classes.reset_theme_button}
                            variant={"contained"}
                        >
                            Reset defaults
                        </Button>
                    </DialogActions>
                </Box>
                {children}
            </Dialog>
        </>
    );
}
