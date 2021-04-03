import {help_text} from "../../Reuseables/NavBar/Help/HelpText.jss";
import {themes} from "../../styles/themes.jss";
import {fontSize002} from "../../styles/fontSizes.jss";

export const inline_text = (fontSize, theme) => ({
    ...help_text(fontSize * 1.1, theme),
    lineHeight: '1em',
    marginTop: '0.8em',
    position: "relative",
    left: "-1em",
});

export const example_box = (screenCase) => {
    switch (screenCase) {
        case 'thin':
            return {
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: 'center'
            }
        default:
            return {
                width: "95%",
                marginLeft: '2.5%',
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "space-between",
            }
    }
};

export const button = (theme) => ({
    display: "inline-block",
    borderRadius: 0,
    width: "3.5em",
    background: themes[theme].fill,
});
export const button_content = () => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "3em",
});
export const button_text = (theme) => ({
    fontSize: '1.5vw',
    marginLeft: '0.5em',
    color: themes[theme].text_alt2,
    '@media screen and (max-width: 960px)': {
        color: themes[theme].nav_text,
    },
});
export const icon = (theme) => ({
    fontSize: '1.5vw',
    color: themes[theme].text_alt2,
    '@media screen and (max-width: 960px)': {
        color: themes[theme].nav_text,
    },
});
