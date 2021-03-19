import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes.jss";
import {headerFontSizes, titleFontSizes} from "./Header/ProfileHeader.jss";
import {getDrawerFontSize} from "./ProfileWB/ProfileWB.jss";

export const useStyles = makeStyles({
    header: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: headerFontSizes.desktop,
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: headerFontSizes.mobile,
            ...getDrawerFontSize(props.hasDrawerParent),
        },
        "@media screen and (max-width: 412px)": {
            fontSize: headerFontSizes.ipx,
            ...getDrawerFontSize(props.hasDrawerParent),
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)':{
            fontSize: headerFontSizes.ipad,
            ...getDrawerFontSize(props.hasDrawerParent),
        },
        width: '100%',
        height: '1.5em',
        display: 'flex',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row-reverse',
        fontFamily: 'Roboto-Light, Roboto',
        backgroundColor: themes[props.theme].fill,
        outline: `0.05em solid ${themes[props.theme].outline}`,
    }),
    /*Parts of the range table's header: */
    title: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: titleFontSizes.desktop,
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: titleFontSizes.mobile,
            ...getDrawerFontSize(props.hasDrawerParent),
        },
        "@media screen and (max-width: 412px)": {
            fontSize: titleFontSizes.ipx,
            ...getDrawerFontSize(props.hasDrawerParent),
        },

        '@media screen and (min-width: 768px) and (max-width: 1040px)':{
            fontSize: titleFontSizes.ipad,
            ...getDrawerFontSize(props.hasDrawerParent),
        },
        marginLeft: 'auto',
        transform: 'translate(0.5em, 0)',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        textAlign: 'center',
    }),
    expand_widget: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: headerFontSizes.desktop,
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: headerFontSizes.mobile,
            ...getDrawerFontSize(props.hasDrawerParent),
        },
        "@media screen and (max-width: 412px)": {
            fontSize: headerFontSizes.ipx,
            ...getDrawerFontSize(props.hasDrawerParent),
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)':{
            fontSize: headerFontSizes.ipad,
            ...getDrawerFontSize(props.hasDrawerParent),
        },
        marginLeft: 'auto',
        width: '1em',
        height: '1em',
        cursor: 'pointer',
        color: themes[props.theme].text,
    }),
    expand_icon: props => ({
        fontSize: 'inherit',
        width: '1em',
        height: '1em',
    }),
}, {index: 1});