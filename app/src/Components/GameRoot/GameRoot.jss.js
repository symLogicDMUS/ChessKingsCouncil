import {boardPos, boardSizes} from "../Reuseables/Board.jss";
import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {themes} from "../styles/themes.jss";

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
        default:
            return {
                position: "absolute",
                top: boardSizes.mobile + boardPos.mobile.top + availHeight() * 0.01,
                left: boardPos.mobile.left,
                width: boardSizes.mobile,
                zIndex: 5,
            }
    }
};

export const accordion_gen = (theme) => ({
    '& .Mui-expanded': {
        '& .MuiAccordionDetails-root': {
            width: '98vw',
            marginLeft: '-5vw',
        },
        '& .MuiButtonBase-root':{
            backgroundColor: themes[theme].fill,
        },
        '& .MuiAccordionSummary-root': {
            width: '98vw',
            marginLeft: '-5vw',
        },
        '& .MuiAccordionSummary-content': {
            width: '98vw',
            backgroundColor: themes[theme].fill,
        },
    },
});

export const styles = {
    /**Use .style for page-level components when only property is document.className.body */
    game_root_body: {
        backgroundImage: 'url("/Images/Backgrounds/background.png")',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center center'
    }
}