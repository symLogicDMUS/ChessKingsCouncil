import React, {useEffect, useState} from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Box from "@material-ui/core/Box";
import { ImgWindow } from "./ImgWindow";
import { useStyles as useMoreStyles } from
        "../../Reuseables/Clickables/ToolWindow.jss";
import {getIconWindowHeight} from "./getIconWindowHeight";
import { useStyles } from "./ImgWindowsModal.jss";

/*Note: if want to add close button or drag indicator back in use TopArea.jsx  */

function IconModal({
    whiteAndBlackImgs,
    setNewPieceImg,
    setImgFileObj,
    resetImg,
    theme,
}) {
    const classes = useStyles({ theme });
    const classes2 = useMoreStyles({ theme });

    const [wh, setWindowHeight] = useState(getIconWindowHeight());
    useEffect(() => {
        function handleResize() {
            setWindowHeight(getIconWindowHeight())
        }
        window.addEventListener("resize", handleResize);
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const variants = {
        initial: {
            scale: 0,
            left: 'calc(50vw + 12px)',
            y: -wh* 0.5 + 80,
        },
        animate: {
            scale: 1,
            left: 0,
            y: 0,
            top: 48,
        },
        exit: {
            scale: 0,
            y: -wh* 0.5 + 80,
            left: 'calc(50vw + 12px)',
        },
    };

    return (
        <motion.div
            className={clsx(classes2.window, {
                [classes2.border1]: true,
                [classes.icon_window]: true,
            })}
            variants={variants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            transition={{
                duration: 0.7
            }}
            drag
        >
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
    );
}

export default IconModal;
