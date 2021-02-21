import {makeStyles} from "@material-ui/core/styles";
import {header, text} from "./ProfileHeader.jss";
import {themes} from "../../styles/themes.jss";
import {fontSizes, widths} from "../PieceProfiles.jss";
import {fontSize0025, fontSize0028, fontSize0032, fontSize0060, fontSize0067, fontSizeW003224, fontSizeW0048}
    from "../../styles/fontSizes.jss";

export const checkbox_root = (screenCase) => {
    switch (screenCase) {
        case 'desktop':
            return {
                marginLeft: '-0.15em',
            }
        case 'ipad':
            return {
                marginLeft: '-0.15em',
            }
        default:
            return null;
    }
};

export const checkbox = (screenCase) => {
    switch (screenCase) {
        case 'desktop':
            return {
                fontSize: fontSize0025,
            }
        case 'ipad':
            return {
                fontSize: fontSizeW003224,
                margin: 'auto',
            }
        default:
            return {
                fontSize: fontSizeW0048,
                transform: 'translate(-0.35em, 0)',
            }
    }
};



export const checkbox_gen = (screenCase) => {
    switch (screenCase) {
        case 'desktop':
            return {
                fontSize: fontSize0025
            }
        case 'ipad':
            return {
                fontSize: fontSizeW003224
            }
        default:
            return {
                fontSize: fontSizeW0048,
                marginRight: 'auto'
            }
    }
};

export const iconButtonsStyle = () => ({
    justifyContent: "space-between",
    alignItems: "center",
});



export const useStyles = makeStyles({
    header: props => ({
        ...header(props.style, props.theme),
        height: '2em',
        '@media (max-aspect-ratio: 1/1)': {
            borderTop: `0.05em solid ${themes[props.theme].outline}`,
            borderBottom: `0.05em solid ${themes[props.theme].outline}`,
        },
    }),
    piece_name: props => ({
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSize0025,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizeW0048,
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizeW003224,
        },
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
    }),
    box: props => ({
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSizes.desktop,
            width: widths.desktop,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
            width: 'unset',
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.ipad,
            width: widths.ipad,
        },
        // border: '1px dashed red',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'flex-start',
        alignItems: 'baseline'
    }),
    sub_button: props => ({
        /*shortest phones*/
        /*phones (generalized)*/
        '@media and (max-device-width: 767px) and (max-aspect-ratio: 85/100)':{
            fontSize: fontSize0028,
        },

        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 85/100) and (max-aspect-ratio: 1/1)":{
            fontSize: fontSize0060,
            width: '1.5em',
            height: '1.5em',
        },
    }),
    checkbox_text: props => ({
       '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
           fontSize: fontSize0025,
       },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizeW0048,
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizeW003224,
        },
    }),
    sub_icon: props => ({
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSize0028,
            width: '1.25em',
            height: '1.25em',
        },
        '@media (max-aspect-ratio: 85/100)': {
            fontSize: fontSize0028,
            width: '1em',
            height: '1em',
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 85/100) and (max-aspect-ratio: 1/1)":{
            fontSize: fontSize0060,
            width: '1em',
            height: '1em',
        },
    }),
    no_sub_icon: props => ({
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSize0028,
            width: '1.2em',
            height: '1.2em',
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSize0028,
            width: '1em',
            height: '1em',
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 85/100) and (max-aspect-ratio: 1/1)":{
            fontSize: fontSize0060,
            width: '1em',
            height: '1em',
        },
    }),
    no_sub_button: props => ({
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 85/100) and (max-aspect-ratio: 1/1)":{
            fontSize: fontSize0060
        },
        width: "0.9em",
        height: "0.9em",
    }),
});
