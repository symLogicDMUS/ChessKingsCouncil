import {boardPos, boardSizes} from "../Reuseables/Board/Board.jss";
import {themes} from "../styles/themes.jss";

export const accordion_root = () => {
    return {
        position: "absolute",
        top: boardPos.mobile.top + boardSizes.mobile,
        left: boardPos.mobile.left,
        width: boardSizes.mobile,
        zIndex: 5,
    }
};

export const franchise_theme_gen = () => ({
    marginTop: 'auto',
    marginBottom: 'auto',
});

export const styles = {
    /**Use .style for page-level components when only property is document.className.body */
    game_root_body: {
        backgroundImage: 'url("/Images/Backgrounds/background.png")',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center center'
    },
    sqr_text_checkbox: props => ({
        marginLeft: 0,
        flexDirection: 'row-reverse',
    }),
}
