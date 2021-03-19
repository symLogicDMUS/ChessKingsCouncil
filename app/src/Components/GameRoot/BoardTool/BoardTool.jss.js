import {themes} from "../../styles/themes.jss";
import {availWidth} from "../../helpers/windowMeasurments";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {drawerItemWidth} from "../../NewGame/Customize/Customize.jss";
import {fontSize0019, fontSize002, fontSize00219,} from "../../styles/fontSizes.jss";

// em units:
export const profileWidth = {
    desktop: 30,
    mobile: 8,
    short: 8,
    ipad: 32,
}

export const profileHeight = {
    desktop: 12.15,
    mobile: 20,
    short: 20,
    ipad: 14,
}

export const fontSizes = {
    desktop: drawerItemWidth * 0.125,
    mobile: availWidth() * 0.4 * 0.125,
    ipx: availWidth() * 0.4 * 0.125,
    short: availWidth() * 0.3 * 0.125,
    ipad: availWidth() * 0.4 * 0.125,
}

export const show_profiles_root = (screenCase, theme) => {
        switch (screenCase) {
            case 'desktop':
                return {
                    fontSize: fontSize002,
                    width: '2.15em',
                    height: '2.15em',
                    color: themes[theme].text,
                }
            default:
                return {
                    width: fontSizes[screenCase] * 2.5,
                    height: fontSizes[screenCase] * 2.5,
                    color: themes[theme].text,
                }
        }
};

export const useStyles = makeStyles({
        board_tool: props => ({
            display: 'flex',
            justifyContent: 'center',
            '@media screen and (max-width: 1040px)': {
                flexDirection: 'row',
                flex: 'nowrap',
                width: '100%',
                alignItems: 'center',
            },
            '@media screen and (min-width: 768px) and (max-width: 1040px)': {
                flexDirection: 'row',
                fontSize: fontSizes.ipad,
                height: '8em',
            },
            '@media screen and (min-width: 1040px)': {
                flexDirection: 'row',
                flexWrap: 'wrap',
                fontSize: fontSizes.desktop,
                width: drawerItemWidth,
                marginLeft: '5%',
                marginBottom: '6vh',
                height: '8em',
            },
        }),
        flex_header: props => ({
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            /*media query for phones/tablets (generalized)*/
            '@media screen and (max-width: 1040px)': {
                flexGrow: 10,
            },
            '@media screen and (min-width: 1040px)': {
                fontSize: fontSizes.desktop,
                height: '0.7em',
                width: '8em',
                outline: `0.04em solid ${themes[props.theme].outline}`,
            },
        }),
        title: props => ({
            fontSize: fontSize00219,
            height: '1em',
            lineHeight: '0.96em',
            fontFamily: 'Roboto-Light, Roboto',
            color: themes[props.theme].text,
        }),
        checkbox_container: props => ({
            flexGrow: 10,
            display: 'inline-flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'center',
        }),
        checkbox: props => ({
            color: themes[props.theme].text,
            '@media screen and (min-width: 1040px)': {
                fontSize: fontSize002,
            },
            /*media query for phones/tablets (generalized)*/
            '@media screen and (max-width: 1040px)': {
                fontSize: fontSizes.mobile
            },
            height: '1.5em',
            width: '1.5em',
        }),
        checkbox_label: props => ({
            color: themes[props.theme].text,
        }),
    }
);
