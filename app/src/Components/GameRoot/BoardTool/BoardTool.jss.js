import makeStyles from "@material-ui/core/styles/makeStyles";
import {drawerItemWidth} from "../../NewGame/Customize/Customize.jss";
import {
    fontSize002,
    fontSize00219,
    fontSize00276,
    fontSize00292
} from "../../styles/fontSizes.jss";
import {resolveScreenCase} from "../../helpers/resolveScreenCase";
import {themes} from "../../styles/themes.jss";

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
    mobile: fontSize00292,
    ipx: fontSize00276,
    ipad: fontSize002,
}

export const show_profile_gen = (screenCase) => {
    switch (screenCase) {
        case 'desktop':
            return {fontSize : fontSize002}
        default:
            return {fontSize : fontSizes[resolveScreenCase(screenCase)]}
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
            return show_profile_gen(screenCase)

    }
};

export const useStyles = makeStyles({
        board_tool: props => ({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            '@media (min-aspect-ratio: 1001/1000)': {
                flexWrap: 'wrap',
                fontSize: fontSizes.desktop,
                width: drawerItemWidth,
                marginLeft: '5%',
                marginBottom: '5vw',
                height: '8em',
            },
            '@media (max-aspect-ratio: 1/1)': {
                flex: 'nowrap',
                width: '100%',
                alignItems: 'center',
            },
            '@media (max-aspect-ratio: 1/2)': {
                flexDirection: 'column',
            },
            '@media (aspect-ratio: 1024/1366)':{
                fontSize: fontSizes.ipad,
                height: '8em',
            },
        }),
        flex_header: props => ({
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            '@media (min-aspect-ratio: 1001/1000)': {
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
