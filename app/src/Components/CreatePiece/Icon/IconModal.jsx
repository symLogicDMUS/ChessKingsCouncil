import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Box from "@material-ui/core/Box";
import { ImgWindow } from "./ImgWindow";
import { DragIndicator } from "@material-ui/icons";
import { CloseTool } from "../../Reuseables/Modals/CloseTool";
import { useStyles as useMoreStyles } from "../CreatePieceToolbar.jss";
import { useStyles } from "./ImgWindowsModal.jss";

function IconModal({
    whiteAndBlackImgs,
    setNewPieceImg,
    resetImg,
    setImgFileObj,
    toggleMiniVariantTool,
    onAnimationComplete,
    drag,
    variants,
    theme,
}) {
    const classes = useStyles({ theme });
    const classes2 = useMoreStyles({ theme });

    return (
        <div className={classes2.modal}>
            <motion.div
                className={clsx(classes2.window, {
                    [classes.icon_window]: true,
                })}
                variants={variants}
                initial={"initial"}
                animate={"animate"}
                exit={"exit"}
                transition={{ duration: 0.7 }}
                onAnimationComplete={onAnimationComplete}
                drag={drag}
            >
                <span className={classes2.top_area}>
                    <DragIndicator
                        className={clsx(classes2.icon, {
                            [classes2.drag_icon]: true,
                        })}
                    />
                    <CloseTool
                        name="Icon"
                        updateParent={toggleMiniVariantTool}
                        className={classes2.close_button}
                        iconClassName={clsx(classes2.icon, {
                            [classes2.close_icon]: true,
                        })}
                        theme={theme}
                    />
                </span>
                <Box className={classes.img_windows}>
                    <ImgWindow
                        color="white"
                        whiteWindow={true}
                        resetImg={resetImg}
                        setPieceImg={setNewPieceImg}
                        src={whiteAndBlackImgs.white}
                        setImgFileObj={setImgFileObj}
                        theme={theme}
                    />
                    <ImgWindow
                        color="black"
                        whiteWindow={false}
                        resetImg={resetImg}
                        setPieceImg={setNewPieceImg}
                        src={whiteAndBlackImgs.black}
                        setImgFileObj={setImgFileObj}
                        theme={theme}
                    />
                </Box>
            </motion.div>
        </div>
    );
}

export default IconModal;
