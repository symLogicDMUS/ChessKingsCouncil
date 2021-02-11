import {boardPos, boardSizes} from "../Reuseables/Board.jss";

export const accordion_root = () => ({
    position: "absolute",
    top: boardSizes.mobile + boardPos.mobile.top,
    left: boardPos.mobile.left,
    width: boardSizes.mobile,
    zIndex: 5,
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