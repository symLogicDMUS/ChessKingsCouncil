import {themes} from "../../../styles/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {get2ItemFontSizes, get2ItemMargins} from "../../CreatePiece.jss";
import {drawerWidth} from "../../../Reuseables/PermanentDrawer.jss";

const container = (angle, theme) => ({
    /*media query for phones/tablets (generalized)*/
    '@media screen and (max-device-width: 1040px)': {
        fontSize: get2ItemFontSizes()
    },
    /*desktops*/
    '@media screen and (min-device-width: 1040px)': {
        fontSize: (drawerWidth - get2ItemMargins())*0.5*0.333*0.333,
    },
    width: '2.75em',
    height: '2.75em',
    borderRadius: '0.2em',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    border: `0.05em solid ${themes[theme].outline}`,
})

export const useStyles = makeStyles({
    container_normal: props => ({
        ...container(props.angle, props.theme),
        backgroundColor: themes[props.theme].button_fill,
        '&:hover': {
            backgroundColor: themes[props.theme].text_alt,
        },
    }),
    container_selected: props => ({
        ...container(props.angle, props.theme),
        backgroundColor: themes[props.theme].span,
        '&:hover': {
            backgroundColor: themes[props.theme].span,
        },
    }),
    arrow_button: props => ({
        /*media query for phones/tablets (generalized)*/
        '@media screen and (max-device-width: 1040px)': {
                fontSize: get2ItemFontSizes(),
                width: '2.75em',
                height: '2.75em',
        },
        /*desktop*/
        '@media screen and (min-device-width: 1040px)': {
            fontSize: (drawerWidth - get2ItemMargins())*0.5*0.333*0.333,
            width: '2.75em',
            height: '2.75em',
        },
        color: themes[props.theme].text,
    }),

    vector: (props) => ({
        /*media query for phones/tablets (generalized)*/
        '@media screen and (max-device-width: 1040px)': {
            fontSize: get2ItemFontSizes(),
            width: '2em',
            height: '2em',
        },
        /*desktops*/
        '@media screen and (min-device-width: 1040px)': {
            fontSize: (drawerWidth - get2ItemMargins())*0.5*0.333*0.333,
            width: '2em',
            height: '2em',
        },
        color: themes[props.theme].text,
    }),
    mid: props => ({
        /*media query for phones/tablets (generalized)*/
        '@media screen and (max-device-width: 1040px)': {
            fontSize: get2ItemFontSizes()
        },
        /*desktops*/
        '@media screen and (min-device-width: 1040px)': {
            fontSize: (drawerWidth - get2ItemMargins())*0.5*0.333*0.333,
        },
        width: '2.75em',
        height: '2.75em',
        borderRadius: '0.2em',
    }),
}, {index: 1});
