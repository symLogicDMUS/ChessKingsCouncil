import {makeStyles} from "@material-ui/core/styles";
import {header, text} from "./ProfileHeader.jss";
import {themes} from "../../styles/themes.jss";
import {fontSizes, widths} from "../PieceProfiles.jss";
import {fontSize002, fontSize001685, fontSizeW0031} from "../../styles/fontSizes.jss";

export const getButtonMargin = (screenCase) => {
    switch (screenCase) {
        case "desktop":
            return "0.5em";
        case "mobile":
            return "0.9em";
    }
};

export const button = (theme) => ({
    '@media screen and (min-width: 768px)': {
        fontSize: fontSize002,
        width: '6.1em',
        height: '2em',
    },
    '@media screen and (max-width: 767px)': {
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
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            width: widths.desktop,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            width: widths.mobile,
            // marginRight: '0.5em'
        },
        marginLeft: '1em',
    }),
    load_button: props => ({
       ...button(props.theme),
        "@media (max-aspect-ratio: 1/2)": {
            fontSize: fontSizeW0031,
            width: '6.9em',
            height: '2.2em',
        },
    }),
    delete_button: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize002,
            width: '6.1em',
            height: '2em',
            marginLeft: "0.5em",
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSize002,
            width: '6.9em',
            height: '1.9em',
            maxWidth: '100em',
            marginLeft: "0.9em",
        },
        "@media (max-aspect-ratio: 1/2)": {
            fontSize: fontSizeW0031,
            width: '6.9em',
            height: '2.2em',
            maxWidth: '100em',
            marginLeft: 0
        },
        border: `0.05em solid ${themes[props.theme].outline}`
    }),
    icon: props => ({
       '@media screen and (min-width: 768px)': {
           fontSize: fontSizes.desktop,
       },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
        },
    }),
});