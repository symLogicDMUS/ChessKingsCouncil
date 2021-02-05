import {help_text, help_title} from "../../Reuseables/NavBar/HelpText.jss";
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
        case 'desktop':
            return {
                width: "100%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "center",
            }
        case 'mobile':
            return {
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: 'center'
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
    fontSize: fontSize002,
    color: themes[theme].outline,
    marginLeft: '0.5em'
});
export const icon = () => ({
    fontSize: fontSize002
});
