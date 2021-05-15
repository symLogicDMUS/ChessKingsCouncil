import React, { useContext, useState } from "react";
import clsx from "clsx";
import { Close } from "../Modals/Close";
import Box from "@material-ui/core/Box";
import { Undo } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import { saveThemes } from "../../../API/saveThemes";
import { Dialog, DialogActions, Typography } from "@material-ui/core";
import { AnimatePresencePortal } from "../Animations/AnimatePresencePortal";
import ThemeSavedSuccessfully from "../Animations/ThemeSavedSuccessfully";
import ThemeDropdown from "../UserInput/ThemeDropdown";
import MuiAccordion from "../Accordions/MuiAccordion";
import AskLoginButton from "../../Home/AskLoginButton";
import { ThemeContext } from "../../ThemeContext";
import { UserContext } from "../../../UserContext";
import { useStyles } from "./SettingsModal.jss";

export function SettingsModal(props) {
    const uid = useContext(UserContext);
    const { themes, setThemes } = useContext(ThemeContext);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const classes = useStyles({ theme: props.theme });

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
                        theme={props.theme}
                        callback={() => {
                            setSaveSuccess(false);
                            props.closeModal();
                        }}
                    />
                </AnimatePresencePortal>
            )}
            <Dialog
                open={true}
                classes={{
                    paper: classes.window,
                }}
                onBackdropClick={props.closeModal}
            >
                <Box className={classes.close_area}>
                    <Close
                        theme={props.theme}
                        onClick={props.closeModal}
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
                                variant={'button'}
                                noWrap
                            >
                                All Pages
                            </Typography>
                        }
                    >
                        <ThemeDropdown
                            theme={props.theme}
                            pageName={"all"}
                        />
                    </MuiAccordion>
                    <MuiAccordion
                        className={classes.accordion}
                        heading={
                            <Typography
                                className={clsx(classes.accordion_summary, {
                                    [classes.highlight]:
                                        props.currentPage === "MainMenu",
                                    [classes.normal]: props.currentPage !== "MainMenu",
                                })}
                                noWrap
                            >
                                Home Page{" "}
                                {props.currentPage === "MainMenu" && added}
                            </Typography>
                        }
                    >
                        <ThemeDropdown
                            theme={props.theme}
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
                                        props.currentPage === "NewGame",
                                    [classes.normal]: props.currentPage !== "NewGame",
                                })}
                                noWrap
                            >
                                New Game{" "}
                                {props.currentPage === "NewGame" && added}
                            </Typography>
                        }
                    >
                        <ThemeDropdown
                            theme={props.theme}
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
                                        props.currentPage === "LoadGame",
                                    [classes.normal]: props.currentPage !== "LoadGame",
                                })}
                                noWrap
                            >
                                Load Game{" "}
                                {props.currentPage === "LoadGame" && added}
                            </Typography>
                        }
                    >
                        <ThemeDropdown
                            theme={props.theme}
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
                                        props.currentPage === "CreatePiece",
                                    [classes.normal]: props.currentPage !== "CreatePiece",
                                })}
                                noWrap
                            >
                                Create Piece{" "}
                                {props.currentPage === "CreatePiece" && added}
                            </Typography>
                        }
                    >
                        <ThemeDropdown
                            theme={props.theme}
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
                                        props.currentPage === "Customize",
                                    [classes.normal]: props.currentPage !== "Customize",
                                })}
                                noWrap
                            >
                                Customize Game{" "}
                                {props.currentPage === "Customize" && added}
                            </Typography>
                        }
                    >
                        <ThemeDropdown
                            theme={props.theme}
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
                                        props.currentPage === "GameRoot",
                                    [classes.normal]: props.currentPage !== "GameRoot",
                                })}
                                noWrap
                            >
                                Playing Game page{" "}
                                {props.currentPage === "GameRoot" && added}
                            </Typography>
                        }
                    >
                        <ThemeDropdown
                            theme={props.theme}
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
                                        props.currentPage === "MyPieces",
                                    [classes.normal]: props.currentPage !== "MyPieces",
                                })}
                                noWrap
                            >
                                Saved Pieces{" "}
                                {props.currentPage === "MyPieces" && added}
                            </Typography>
                        }
                    >
                        <ThemeDropdown
                            theme={props.theme}
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
                                        props.currentPage === "CouncilRules",
                                    [classes.normal]: props.currentPage !== "CouncilRules",
                                })}
                                noWrap
                            >
                                Council Rules{" "}
                                {props.currentPage === "CouncilRules" && added}
                            </Typography>
                        }
                    >
                        <ThemeDropdown
                            theme={props.theme}
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
                                theme={props.theme}
                                buttonType="theme"
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
                    {props.children}
                </Box>
            </Dialog>
        </>
    );
}
