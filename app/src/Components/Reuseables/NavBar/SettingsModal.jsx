import clsx from "clsx";
import React from "react";
import {useState} from "react";
import {useContext} from "react";
import { Close } from "../Modals/Close";
import { Undo } from "@material-ui/icons";
import {Button} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import { Dialog } from "@material-ui/core";
import {DialogTitle} from "@material-ui/core";
import {DialogActions} from "@material-ui/core";
import {DialogContent} from "@material-ui/core";
import { saveThemes } from "../../../API/saveThemes";
import MuiAccordion from "../Accordions/MuiAccordion";
import ThemeDropdown from "../UserInput/ThemeDropdown";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { UserContext } from "../../../Context/UserContext";
import { ThemeContext } from "../../../Context/ThemeContext";
import AskLoginButton from "../../Home/Sign In/AskLoginButton";
import { AnimatePresencePortal } from "../Animations/AnimatePresencePortal";
import ThemeSavedSuccessfully from "../Animations/ThemeSavedSuccessfully";
import {smReset, useStyles} from "./SettingsModal.jss";

export function SettingsModal(props) {
    const {currentPage, closeModal, theme, children, ...other} = props;
    
    const uid = useContext(UserContext);
    const { themes, setThemes } = useContext(ThemeContext);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const sm = useMediaQuery("(max-width: 375px)");
    const classes = useStyles({ theme: theme });

    const saveThemesToDb = () => {
        saveThemes(themes).then((r) => {
            setSaveSuccess(true);
        });
    };

    const resetDefaults = () => {
        setThemes({
            newGame: "tan",
            loadGame: "tan",
            createPiece: "dark",
            customize: "dark",
            gameRoot: "dark",
            myPieces: "dark",
            councilRules: "tan",
            home: "tan",
        })
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
                <Close
                    theme={theme}
                    onClick={closeModal}
                    className={classes.close}
                    iconClassName={classes.close_icon}
                />
                <DialogTitle className={classes.normal}>Settings</DialogTitle>
                <DialogContent>
                    <Typography variant={"subtitle1"} className={classes.normal} paragraph>Theme</Typography>
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
                                {! sm && currentPage === "MainMenu" && added}
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
                                {! sm && currentPage === "NewGame" && added}
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
                                {! sm && currentPage === "LoadGame" && added}
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
                                {! sm && currentPage === "CreatePiece" && added}
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
                                {! sm && currentPage === "Customize" && added}
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
                                {! sm && currentPage === "GameRoot" && added}
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
                                {! sm && currentPage === "MyPieces" && added}
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
                                {! sm && currentPage === "CouncilRules" && added}
                            </Typography>
                        }
                    >
                        <ThemeDropdown
                            theme={theme}
                            pageName={"councilRules"}
                            defaultValue={themes.councilRules}
                        />
                    </MuiAccordion>
                    {children}
                </DialogContent>
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
                        variant={"contained"}
                        startIcon={<Undo />}
                        className={classes.reset_theme_button}
                        style={sm ? smReset : null}
                    >
                        Reset defaults
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
