import React, { useState } from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import { Portal } from "@material-ui/core";
import {ImgWindow} from "./Icon/ImgWindow";
import { DragIndicator } from "@material-ui/icons";
import { AnimatePresence, motion } from "framer-motion";
import {CloseTool} from "../Reuseables/Modals/CloseTool";
import ToolButton from "../Reuseables/Clickables/ToolButton";
import {MuiTextField as TextField} from "../Reuseables/UserInput/MuiTextField";
import {useStyles as useEvenMoreStyles} from "./Icon/ImgWindowsModal.jss";
import {useStyles as useMoreStyles} from "./Name/Name.jss";
import { useStyles } from "./CreatePieceToolbar.jss";

function CreatePieceToolbar({pieceName, updateName, whiteAndBlackImgs, setNewPieceImg, resetImg, theme }) {
    const classes = useStyles({theme: theme});
    const classes2 = useMoreStyles({theme: theme});
    const classes3 = useEvenMoreStyles({theme: theme});

    const [state, setState] = useState({
        miniVariantTool: null,
        clientX: 0,
        clientY: 0,
        locSqrAnimate: false,
    });

    const toggleMiniVariantTool = (toolName, clientX, clientY) => {
        if (state.miniVariantTool === toolName) {
            setState({
                ...state,
                miniVariantTool: null,
                clientX: clientX,
                clientY: clientY,
            });
        } else {
            setState({
                ...state,
                miniVariantTool: toolName,
                clientX: clientX,
                clientY: clientY,
            });
        }
    };

    const handleInput = (e) => {
        updateName(e.target.value);
    };

    const [drag, setDrag] = useState(false);

    const variants = {
        initial: {
            scale: 0,
            left: state.clientX,
            top: state.clientY,
        },
        animate: {
            scale: 1,
            left: 0,
            top: 48,
        },
        exit: {
            scale: 0,
            left: state.clientX,
            top: state.clientY,
        },
    };

    return (
        <>
            <Portal>
                {/*<div className={classes.modal}>*/}
                    <AnimatePresence>
                        {state.miniVariantTool === "Name" && (
                            <motion.div
                                className={clsx(classes.window, {
                                    [classes2.name_window]: true,
                                })}
                                variants={variants}
                                initial={"initial"}
                                animate={"animate"}
                                exit={"exit"}
                                transition={{ duration: 0.7 }}
                                onAnimationComplete={() => setDrag(true)}
                                drag={drag}
                            >
                                <span className={classes.top_area}>
                                    <DragIndicator
                                        className={clsx(classes.icon, {
                                            [classes.drag_icon]: true,
                                        })}
                                    />
                                    <CloseTool
                                        name="Name"
                                        updateParent={toggleMiniVariantTool}
                                        className={classes.close_button}
                                        iconClassName={clsx(classes.icon, {
                                            [classes.close_icon]: true,
                                        })}
                                        theme={theme}
                                    />
                                </span>
                                <TextField
                                    theme={theme}
                                    fullWidth={true}
                                    label="Piece Name"
                                    autoComplete="off"
                                    autoFocus={true}
                                    variant="outlined"
                                    onChange={handleInput}
                                    defaultValue={pieceName}
                                    className={classes2.name}
                                    size={"small"}
                                    id="game-name"
                                />
                            </motion.div>
                        )}
                        {state.miniVariantTool === "Icon" && (
                            <motion.div
                                className={clsx(classes.window, {
                                    [classes3.icon_window]: true,
                                })}
                                variants={variants}
                                initial={"initial"}
                                animate={"animate"}
                                exit={"exit"}
                                transition={{ duration: 0.7 }}
                                onAnimationComplete={() => setDrag(true)}
                                drag={drag}
                            >
                                <span className={classes.top_area}>
                                    <DragIndicator
                                        className={clsx(classes.icon, {
                                            [classes.drag_icon]: true,
                                        })}
                                    />
                                    <CloseTool
                                        name="Icon"
                                        updateParent={toggleMiniVariantTool}
                                        className={classes.close_button}
                                        iconClassName={clsx(classes.icon, {
                                            [classes.close_icon]: true,
                                        })}
                                        theme={theme}
                                    />
                                </span>
                                <Box className={classes3.img_windows}>
                                    <ImgWindow
                                        color="white"
                                        whiteWindow={true}
                                        resetImg={resetImg}
                                        setPieceImg={setNewPieceImg}
                                        src={whiteAndBlackImgs.white}
                                        theme={theme}
                                    />
                                    <ImgWindow
                                        color="black"
                                        whiteWindow={false}
                                        resetImg={resetImg}
                                        setPieceImg={setNewPieceImg}
                                        src={whiteAndBlackImgs.black}
                                        theme={theme}
                                    />
                                </Box>
                            </motion.div>
                        )}
                    </AnimatePresence>
                {/*</div>*/}
            </Portal>
            <ToolButton
                text="Name"
                name="Name"
                theme={theme}
                iconName={"name_tool"}
                updateParent={toggleMiniVariantTool}
                isActive={state.miniVariantTool === "Name"}
            />
            <ToolButton
                text="Icon"
                name="Icon"
                theme={theme}
                iconName={"icon_tool"}
                updateParent={toggleMiniVariantTool}
                isActive={state.miniVariantTool === "Icon"}
            />
        </>
    );
}

export default CreatePieceToolbar;
