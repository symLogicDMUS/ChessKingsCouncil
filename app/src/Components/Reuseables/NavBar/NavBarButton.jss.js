import makeStyles from "@material-ui/core/styles/makeStyles";
import {
    fontSize0019,
    fontSize002,
    fontSize0023,
    fontSize00236,
    fontSize0024,
    fontSize0035,
    fontSize0040,
} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";
import {navBarWidth} from "./NavBar.jss";

export const navBarButtonWidth = navBarWidth * 0.99;
const margin = '0.4em'

const getStyle = (screenCase, currentPage) => {
    switch (screenCase) {
        case 'desktop':
            return desktopStyleByPage(currentPage)
        case 'mobile':
            return {
                fontSize: fontSize0024,
                justifyContent: "flex-start",
                width: "99%",
                height: "2.5em"
            }
        case 'ipx':
            return {
                fontSize: fontSize00236,
                justifyContent: "flex-start",
                width: "99%",
                height: "2.5em"
            }
        case 'ipad':
            return {
                fontSize: fontSize00236,
                justifyContent: "flex-start",
                width: "99%",
                height: "2.5em"
            }
        case 'short':
            return {
                fontSize: fontSize0040,
                justifyContent: "flex-start",
                width: "99%",
                height: "2.25em"
            }
        default:
            throw new Error('no screen type given')
    }
};

export const text = (screenCase) => {
    switch (screenCase) {
        case 'desktop':
            return {
                fontSize: fontSize002,
                marginRight: margin,
                marginTop: '0.15em',
            }
        case 'mobile':
            return {
                fontSize: fontSize002,
                marginRight: margin,
                marginTop: '0.15em',
            }
        case 'ipx':
            return {
                fontSize: fontSize0019,
                marginRight: margin,
                marginTop: '0.15em',
            }
        case 'ipad':
            return {
                fontSize: fontSize002,
                marginRight: margin,
                marginTop: '0.15em',
            }
        case 'short':
            return {
                fontSize: fontSize0035,
                marginRight: margin,
            }
        default:
            throw new Error('no screen case given')
    }
};

export const icon = (screenCase) => {
    switch (screenCase) {
        case 'desktop':
            return {
                fontSize: fontSize0024,
                marginRight: margin,
            }
        case 'mobile':
            return {
                fontSize: fontSize0024,
                marginRight: margin,
            }
        case 'ipx':
            return {
                fontSize: fontSize0023,
                marginRight: margin,
            }
        case 'ipad':
            return {
                fontSize: fontSize0023,
                marginRight: margin,
            }
        case 'short':
            return {
                fontSize: fontSize0035,
                marginRight: margin,
                transform: 'translate(0, -0.15em)',
            }
        default:
            throw new Error('no screen case given')
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

export const getHoverColor = (theme) => ({
    backgroundColor: themes[theme].button_hover_fill
});

export const useStyles = makeStyles({
    nav_bar_button: props => ({
        display: 'flex',
        flexGrow: 3,
        borderRadius: 0,
        ...getStyle(props.screenCase, props.currentPage),
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 85/100) and (max-aspect-ratio: 1/1)":{
            alignItems: 'baseline',
        },
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
    }),
    text_hover: props => ({
        ...text(props.screenCase),
        color: themes[props.theme].button_hover_text,
    }),
    icon: props => ({
        ...icon(props.screenCase),
        color: themes[props.theme].text_alt2,
    }),
    icon_hover: props => ({
        ...icon(props.screenCase),
        color: themes[props.theme].button_hover_text,
    }),
});
