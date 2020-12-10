import {availHeight, availWidth} from "../helpers/windowMeasurments";

export const toolWidth = () => availWidth() * 0.3;
export const toolLeft = () => availWidth() * 0.57;
export const toolTitleFontSize = () => availHeight() * 0.0225;
export const lineHeight = () =>  '0.7em'
export const margin = () => toolWidth() * 0.025;

export const styles = {
    create_piece_body: {
        backgroundImage: 'url("/Images/Backgrounds/y-so-serious.png")',
        backgroundRepeat: "repeat",
        OObjectFit: "none",
        objectFit: "none",
    },
};
