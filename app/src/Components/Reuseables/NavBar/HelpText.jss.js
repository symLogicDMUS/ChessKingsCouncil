/** used by all the different pages */
import {themes} from "../../styles/themes.jss";

export const help_text = (fontSize, theme) => ({
    fontSize: fontSize,
    fontFamily: 'Roboto-Light, Roboto',
    color: themes[theme].text,
    width: '95%',
    margin: 'auto',
});

export const help_title = (fontSize, theme) => ({
    fontSize: fontSize,
    fontFamily: 'Roboto-Light, Roboto',
    textAlign: 'center',
    color: themes[theme].text,
});