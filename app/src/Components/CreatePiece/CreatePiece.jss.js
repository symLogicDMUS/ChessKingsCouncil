import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {themes} from "../styles/themes.jss";

export const toolWidth = () => availWidth() * 0.336;
export const toolLeft = () => availWidth() * 0.57;
export const toolTitleFontSize = () => availHeight() * 0.0225;
export const drawerWidth = availWidth() * 0.23;
export const sideBarWidth = drawerWidth * 0.75;

/**
 * em units
 */
export const lineHeight = 0.7;
export const margin = 1.1;

export const tool = (fontSize, theme) => ({
    fontSize: fontSize,
    width: '100%',
    backgroundColor: themes[theme].fill,
})

export const tool_flexbox = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    width: '90%',
    marginLeft: '5%'
}

export const tool_title = (fontSize, theme) => ({
    fontSize: fontSize,
    fontFamily: 'Roboto-Light, Roboto',
    color: themes[theme].text,
    width: '100%',
    lineHeight: '2em',
})

export const styles = {
    create_piece_body: {
        backgroundImage: 'url("/Images/Backgrounds/y-so-serious.png")',
        backgroundRepeat: "repeat",
        objectFit: "none",
    },
    box: props => ({
        fontSize: props.fontSize,
        display: 'flex',
    }),
};
