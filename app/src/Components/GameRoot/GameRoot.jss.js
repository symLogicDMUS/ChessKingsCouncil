import {fullScreenImg} from "../styles/fullScreenImg.jss";
import {availWidth} from "../helpers/windowMeasurments";

export const drawerWidth = availWidth() * 0.23;
export const sideBarWidth = drawerWidth * 0.6;

export const styles = {
    /**Use .style for page-level components when only property is document.className.body */
    game_root_body: {
        backgroundImage: 'url("/Images/Backgrounds/background.png")',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center center'
    }
}