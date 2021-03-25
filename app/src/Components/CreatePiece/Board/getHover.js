import {themes} from "../../styles/themes.jss";

export const getHover = (screenCase, theme) => {
    if (screenCase === 'wide') {
        return {"&:hover": {backgroundColor: themes[theme].sqr_hover}}
    } else {
        return null;
    }
};