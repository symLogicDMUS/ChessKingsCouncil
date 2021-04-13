import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { ImgWindow } from "./ImgWindow";
import { ToolModal } from "../../NewGame/Customize/ToolModal";
import { useStyles } from "./ImgWindowsModal.jss";

export function ImgWindowsModal({
    miniVariantTool,
    toggleMiniVariantTool,
    whiteAndBlackImgs,
    resetImg,
    setPieceImg,
    theme,
}) {
    const [white, setWhite] = useState(true);
    const [black, setBlack] = useState(true);
    const classes = useStyles({ theme: theme });

    const setNewPieceImg = (color, imgUrl) => {
        setPieceImg(color, imgUrl);
        if (color === "white") {
            setWhite(false);
        } else {
            setBlack(false);
        }
    };

    return (
        <>
            <ToolModal
                isIn={miniVariantTool==="Icon" && (white || black)}
                onClose={() => toggleMiniVariantTool(null)}
                onExit={() => toggleMiniVariantTool(null)}
                className={classes.tool_window}
                direction='left'
                theme={theme}
            >
                <Box className={classes.img_windows}>
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
            </ToolModal>
        </>
    );
}
