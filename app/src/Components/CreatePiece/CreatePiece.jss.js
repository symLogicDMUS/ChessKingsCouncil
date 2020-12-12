import {availHeight, availWidth} from "../helpers/windowMeasurments";

export const toolWidth = () => availWidth() * 0.336;
export const toolLeft = () => availWidth() * 0.57;
export const toolTitleFontSize = () => availHeight() * 0.0225;

/**
 * em units
 */
export const lineHeight = 0.7;
export const margin = 1.1;

export const styles = {
    create_piece_body: {
        backgroundImage: 'url("/Images/Backgrounds/y-so-serious.png")',
        backgroundRepeat: "repeat",
        objectFit: "none",
    },
};
