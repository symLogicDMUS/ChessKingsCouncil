import makeStyles from "@material-ui/core/styles/makeStyles";
import {
    fontSize0011,
    fontSize0015,
    fontSize002,
    fontSize0023,
    fontSize0024,
} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";
import {navBarWidth} from "./NavBar.jss";

export const getHoverColor = (theme) => ({
    backgroundColor: themes[theme].button_hover_fill
});

export const navBarButtonWidth = navBarWidth * 0.99;
const margin = '0.4em'

export const text = (screenCase) => {
    switch (screenCase) {
        case 'desktop':
            return {
                fontSize: fontSize002,
                marginRight: margin,
                marginTop: '0.15em',
                '@media screen and (max-width: 1220px)': {
                    fontSize: fontSize0015,
                },
            }
        default:
            return {
                fontSize: fontSize002,
                marginRight: margin,
                marginTop: '0.1525em',
            }
    }
};

export const icon = (screenCase) => {
    switch (screenCase) {
        case 'desktop':
            return {
                fontSize: fontSize0024,
                marginRight: margin,
            }
        default:
            return {
                fontSize: fontSize0023,
                marginRight: margin,
            }
    }
};

const desktopStyleByPage = (currentPage) => {
    switch (currentPage) {
        case 'CreatePiece':
            return {
                fontSize: fontSize002,
                justifyContent: "flex-start",
                width: navBarButtonWidth,
                height: "2.5em",
            }
        case 'MyPieces':
            return {
                fontSize: fontSize002,
                justifyContent: "center",
                height: "2.35em",
            }
        case 'NewGame':
            return {
                fontSize: fontSize002,
                height: "2.25em",
                justifyContent: "center",
            }
        case 'GameRoot':
            return {
                fontSize: fontSize002,
                justifyContent: "flex-start",
                width: navBarButtonWidth,
                height: "2.5em",
            }
        case 'LoadGame':
            return {
                fontSize: fontSize002,
                justifyContent: "center",
                height: "2.25em",
            }
        case 'Customize':
            return {
                fontSize: fontSize002,
                width: navBarButtonWidth,
                justifyContent: "flex-start",
            }
        case "CouncilRules":
            return {
                fontSize: fontSize002,
                justifyContent: "center",
                height: "2.35em",
            }
    }
};

export const getStyle = (screenCase, currentPage) => {
    switch (screenCase) {
        case 'desktop':
            return desktopStyleByPage(currentPage)
        default:
            return {
                fontSize: fontSize0024,
                justifyContent: "flex-start",
                width: "99%",
                height: "2.5em"
            }
    }
};

export const useStyles = makeStyles({
    nav_bar_button: props => ({
        display: 'flex',
        flexGrow: 3,
        borderRadius: 0,
        ...getStyle(props.screenCase, props.currentPage),
        background: themes[props.theme].fill,
    }),
    box: props => ({
        ...props.style,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: 4,
    }),
    text: props => ({
        ...text(props.screenCase),
        color: themes[props.theme].text_alt2,
        '@media screen and (max-device-width: 1040px)': {
            color: themes[props.theme].nav_text,
        },
    }),
    text_hover: props => ({
        ...text(props.screenCase),
        color: themes[props.theme].button_hover_text,
    }),
    icon: props => ({
        ...icon(props.screenCase),
        color: themes[props.theme].text_alt2,
        '@media screen and (max-device-width: 1040px)': {
            color: themes[props.theme].nav_text,
        },
    }),
    icon_hover: props => ({
        ...icon(props.screenCase),
        color: themes[props.theme].button_hover_text,
    }),
}, {index: 1});