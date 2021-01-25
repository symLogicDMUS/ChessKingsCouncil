import makeStyles from "@material-ui/core/styles/makeStyles";
import {drawerItemWidth} from "../../NewGame/Customize/Customize.jss";
import {fontSize00219, fontSize00457} from "../../styles/fontSizes.jss";
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

export const useStyles = makeStyles({
        board_tool: props => ({
            fontSize: fontSize00457,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            '@media screen and (min-width: 768px)': {
                width: drawerItemWidth,
                marginLeft: '5%',
                height: '8em',
            },
            '@media screen and (max-width: 767px)': {
                width: '100%',
                height: '100%',
                alignItems: 'center'
            },
        }),
        flex_header: props => ({
            fontSize: fontSize00457,
            width: '10em',
            height: '0.7em',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            '@media screen and (min-width: 768px)': {
                border: `0.04em solid ${themes[props.theme].outline}`,
            },
            '@media screen and (max-width: 767px)': {
                justifyContent: 'center',
                marginTop: '-1em',
            },
            border: '1px dashed #1faae',
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
