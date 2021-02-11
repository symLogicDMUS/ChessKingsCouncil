import makeStyles from "@material-ui/core/styles/makeStyles";
import {drawerItemWidth} from "../../NewGame/Customize/Customize.jss";
import {fontSize00219, fontSize00276, fontSize00292, fontSize00435, fontSize0046} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";

// em units:
export const profileWidth = {
    desktop: 30,
    mobile: 8,
}

export const profileHeight = {
    desktop: 12.15,
    mobile: 20,
}

export const fontSizes = {
    desktop: fontSize0046,
    mobile: fontSize00292,
    ipx: fontSize00276,
}

export const useStyles = makeStyles({
        board_tool: props => ({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            '@media (min-aspect-ratio: 16/9)': {
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
                height: '100%',
                alignItems: 'center'
            },
            '@media (max-aspect-ratio: 1/2)': {
                flexDirection: 'column',
            },
        }),
        flex_header: props => ({
            display: 'flex',
            '@media (min-aspect-ratio: 16/9)': {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: fontSizes.desktop,
                outline: `0.04em solid ${themes[props.theme].outline}`,
                height: '0.7em',
                width: '8em',
            },
            '@media (max-aspect-ratio: 1/1)': {
                justifyContent: 'center',
                alignItems: "center",
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
