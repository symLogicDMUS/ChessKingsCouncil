import React, {useEffect, useState} from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Box from "@material-ui/core/Box";
import { Close } from "../../Reuseables/Modals/Close";
import {ClickAwayListener, Portal, Slide,} from "@material-ui/core";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { useStyles as useMoreStyles } from "../CreatePiece.jss";
import { useStyles } from "./ImgWindowsModal.jss";
import {ImgWindow} from "./ImgWindow";

export function ImgWindowsModal({toggleMiniVariantTool, whiteAndBlackImgs, resetImg, setPieceImg, theme}) {
    const [drag, setDrag] = useState(false);
    const [white, setWhite] = useState(true);
    const [black, setBlack] = useState(true);
    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles({ theme: theme });

    const setNewPieceImg = (color, imgUrl) => {
        setPieceImg(color, imgUrl)
        if (color === 'white') {
            setWhite(false)
        }
        else {
            setBlack(false)
        }
    };

    return (
        <Portal>
            <div className={classes2.modal}>
                <ClickAwayListener
                    onClickAway={() => toggleMiniVariantTool("Icon")}
                    mouseEvent="onMouseDown"
                    touchEvent="onTouchStart"
                >
                    <Slide
                        in={black || white}
                        direction="left"
                        mountOnEnter
                        unmountOnExit
                        onEnter={() => setDrag(true)}
                        onExit={() => toggleMiniVariantTool(null)}
                    >
                        <motion.div drag={drag} className={classes.window}>
                            <Box className={classes2.close_area}>
                                <DragIndicatorIcon
                                    className={clsx(classes2.icon, {
                                        [classes.draggable_icon]: true,
                                    })}
                                />
                                <Close
                                    theme={theme}
                                    className={classes2.close}
                                    iconClassName={classes2.icon}
                                    onClick={() =>
                                        toggleMiniVariantTool("Icon")
                                    }
                                />
                            </Box>
                            <Box className={classes.window_area}>
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
                    </Slide>
                </ClickAwayListener>
            </div>
        </Portal>
    );
}
