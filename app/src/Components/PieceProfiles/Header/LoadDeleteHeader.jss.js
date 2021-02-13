import {makeStyles} from "@material-ui/core/styles";
import {header, text} from "./ProfileHeader.jss";
import {themes} from "../../styles/themes.jss";
import {fontSizes, widths} from "../PieceProfiles.jss";
import {
    fontSize002, fontSizeW0025,
    fontSizeW003224,
    fontSizeW0035,
} from "../../styles/fontSizes.jss";

export const icon = (screenCase) => {
    switch (screenCase) {
        case 'mobile':
            return {
                fontSize: fontSizeW0035
            }
        case 'ipx':
            return {
                fontSize: fontSizeW0035
            }
        case 'ipad':
            return {
                fontSize: fontSizeW0025
            }
        default:
            return null;
    }
};

export const delete_icon = (screenCase) => {
    switch (screenCase) {
        case 'desktop':
            return null;
        default:
            return {
                ...icon(screenCase),
                transform: 'translate(0.25em, 0)',
            }
    }
};

export const button = (theme) => ({
    '@media (min-aspect-ratio: 1001/1000)': {
        fontSize: fontSize002,
        width: '6.1em',
        height: '2em',
    },
    '@media (max-aspect-ratio: 1/1)': {
        fontSize: fontSize002,
        width: '6.9em',
        height: '1.9em',
        maxWidth: '100em',
    },
    border: `0.05em solid ${themes[theme].outline}`
});

export const useStyles = makeStyles({
    header: props => ({
        ...header(props.style, props.theme),
        justifyContent: 'space-between',
    }),
    piece_name: props => ({
        ...text(props.theme),
    }),
    buttons_outer_flexbox: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexGrow: 3,
        "@media (max-aspect-ratio: 1/2)": {
            flexGrow: 0,
            marginLeft: '1em',
        },
    }),
    buttons_inner_flexbox: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSizes.desktop,
            width: widths.desktop,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
            width: widths.mobile,
        },
        '@media (min-aspect-ratio: 3/4) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizes.ipad,
            width: widths.ipad,
        },
        marginLeft: '1em',
    }),
    load_button: props => ({
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize002,
            width: '6.1em',
            height: '2em',
            marginRight: '0.5em',
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizeW003224,
            '& .MuiButton-label': {
                minHeight: 'unset',
                lineHeight: '0.85em',
            },
            width: '6.25em',
            height: '2.1em',
        },
        '@media (min-aspect-ratio: 3/4) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizeW0025,
            '& .MuiButton-label': {
                minHeight: 'unset',
                lineHeight: '0.85em',
            },
            width: '5em',
        },
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    delete_button: props => ({
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize002,
            width: '6.1em',
            height: '2em',
            marginLeft: "0.5em",
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizeW003224,
            '& .MuiButton-label': {
                minHeight: 'unset',
                lineHeight: '0.85em',
            },
            width: '6.25em',
            height: '2.1em',
        },
        '@media (min-aspect-ratio: 3/4) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizeW0025,
            '& .MuiButton-label': {
                minHeight: 'unset',
                minWidth: 'unset',
                lineHeight: '0.85em',
            },
            width: '5em',
        },
        border: `0.05em solid ${themes[props.theme].outline}`
    }),
});