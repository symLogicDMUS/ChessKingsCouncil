import {fullScreenImg} from "../styles/fullScreenImg.jss";

export const styles = {
    /**Use .style for page-level components when only property is document.className.body */
    game_root_body: {
        backgroundImage: 'url("/Images/Backgrounds/background.png")',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center center'
    },
    background: {
        ...fullScreenImg,
        backgroundImage: 'url("/Images/Backgrounds/light-background.png")',
    }
}