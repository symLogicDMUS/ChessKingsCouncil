import {boardPos, boardSizes} from "../Reuseables/Board.jss";
import {themes} from "../styles/themes.jss";
import {appBarHeight} from "../Reuseables/PersistentDrawer.jss";
import {resolveScreenCase} from "../helpers/resolveScreenCase";
import PersistentDrawer from "../Reuseables/PersistentDrawer";
import React from "react";

export const accordion_root = (screenCase) => {
    switch (screenCase) {
        case 'ipad':
            return {
                position: "absolute",
                top: boardSizes.ipad + boardPos.ipad.top,
                left: boardPos.ipad.left,
                width: boardSizes.ipad,
                zIndex: 5,
            }
        case 'ipx':
            return {
                position: "absolute",
                top: boardSizes.ipx + boardPos.ipx.top,
                left: boardPos.ipx.left,
                width: boardSizes.ipx,
                zIndex: 5,
            }
        case 'short':
            return {
                position: "absolute",
                top: boardPos.short.top,
                left: boardPos.short.left*2 + boardSizes.short,
                width: boardSizes.short*0.99,
                zIndex: 5,
            }
        default:
            return {
                position: "absolute",
                top: appBarHeight + boardSizes.mobile,
                left: boardPos.mobile.left,
                width: boardSizes.mobile,
                zIndex: 5,
            }
    }
};

export const accordion_gen = (screenCase, theme) => {
    switch (screenCase) {
        case 'short':
            return {
                '& .Mui-expanded': {
                    '& .MuiAccordionDetails-root': {
                        width: '100vw',
                        marginLeft: '-20vw',
                    },
                    '& .MuiButtonBase-root': {
                        backgroundColor: themes[theme].fill,
                    },
                    '& .MuiAccordionSummary-root': {
                        minHeight: 'unset',
                        height: '1em',
                        width: '100vw',
                        marginLeft: '-20vw',
                        border: '1px dashed blue',
                    },
                    '& .MuiAccordionSummary-content': {
                        width: '100vw',
                        backgroundColor: themes[theme].fill,
                        border: '1px dashed green',
                    },
                    '& .MuiIconButton-root': {
                        border: '1px dashed hotpink',
                        width: '1em',
                        height: '1em',
                    },
                },
            }
        default:
            return null;
    }
};


export const styles = {
    /**Use .style for page-level components when only property is document.className.body */
    game_root_body: {
        backgroundImage: 'url("/Images/Backgrounds/background.png")',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center center'
    }
}