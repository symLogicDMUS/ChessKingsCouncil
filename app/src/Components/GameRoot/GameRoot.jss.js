import {boardPos, boardSizes} from "../Reuseables/Board.jss";

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
        default:
            return {
                position: "absolute",
                top: boardSizes.mobile + boardPos.mobile.top,
                left: boardPos.mobile.left,
                width: boardSizes.mobile,
                zIndex: 5,
            }
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