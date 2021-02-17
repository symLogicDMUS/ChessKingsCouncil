import makeStyles from "@material-ui/core/styles/makeStyles";
import {drawerItemWidth} from "../../NewGame/Customize/Customize.jss";
import {
    fontSize002,
    fontSize00219,
    fontSize00276,
} from "../../styles/fontSizes.jss";
import {resolveScreenCase} from "../../helpers/resolveScreenCase";
import {themes} from "../../styles/themes.jss";
import {availWidth} from "../../helpers/windowMeasurments";

// em units:
export const profileWidth = {
    desktop: 30,
    mobile: 8,
    ipad: 32,
}

export const profileHeight = {
    desktop: 12.15,
    mobile: 20,
    ipad: 14,
}

export const fontSizes = {
    desktop: drawerItemWidth*0.125,
    mobile: availWidth()*0.3*0.125,
    ipx: availWidth()*0.3*0.125,
    ipad: fontSize002,
}

export const show_profile_gen = (screenCase) => {
    switch (screenCase) {
        case 'desktop':
            return {fontSize : fontSize002}
        default:
            return {fontSize : fontSizes[resolveScreenCase(screenCase)]*1.2}
    }
};

export const show_profile_root = (screenCase) => {
    switch (screenCase) {
        case 'ipad':
            return {
                ...show_profile_gen(screenCase),
                transform: 'translate(1.5em, 0)',
            }
        default:
            return {
                ...show_profile_gen(screenCase),
            }
    }
};

export const show_profile_checkbox = (screenCase) => {
    switch (screenCase) {
        case 'desktop':
            return null
        default:
            return {
                transform: 'translate(0.5em, 0)'
            }
    }
};
export const useStyles = makeStyles({
        board_tool: props => ({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            '@media (max-aspect-ratio: 1/1)': {
                flex: 'nowrap',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'flex-start',
            },
            '@media screen and (min-device-width: 768px) and (max-device-width: 991px) and (max-aspect-ratio: 1/1)':{
                fontSize: fontSizes.ipad,
                height: '8em',
            },
            '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
                flexWrap: 'wrap',
                fontSize: fontSizes.desktop,
                width: drawerItemWidth,
                marginLeft: '5%',
                marginBottom: '5vw',
                height: '8em',
            },
        }),
        flex_header: props => ({
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
                fontSize: fontSizes.desktop,
                height: '0.7em',
                width: '8em',
                outline: `0.04em solid ${themes[props.theme].outline}`,
            },
        }),
        title: props => ({
            fontSize: fontSize00219,
            fontFamily: 'Roboto-Light, Roboto',
            color: themes[props.theme].text,
            height: '1em',
            lineHeight: '0.96em',
        }),
    }
);
