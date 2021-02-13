import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSizes, widths} from "../PieceProfiles.jss";
import {themes} from "../../styles/themes.jss";
import {profileHeight} from "../Profile.jss";
import {modal} from "../../helpers/modal.jss";

export const useStyles = makeStyles({
    modal: props => ({
       ...modal,
       zIndex: 9,
    }),
    profile_wb: props => ({
        zIndex: 'inherit',
        display: 'flex',
        '@media (min-aspect-ratio: 1001/1000)': {
            width: '100%',
            fontSize: fontSizes.desktop,
            marginTop: '0.7em',
            marginBottom: '0.7em',
            flexDirection: 'row',
            flexWrap: 'no-wrap',
            justifyContent: 'space-between',
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
            height: `${profileHeight*0.85}`,
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        '@media (min-aspect-ratio: 3/4) and (max-aspect-ratio: 1/1)':{
            width: '100%',
            fontSize: fontSizes.ipad,
            flexDirection: 'row',
            flexWrap: 'no-wrap',
            justifyContent: 'space-between',
            marginBottom: '0.7em',
            marginTop: '0.7em',

        },
    }),
    range_header: props => ({
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
        height: '1.5em',
        display: 'flex',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row-reverse',
        fontFamily: 'Roboto-Light, Roboto',
        backgroundColor: themes[props.theme].fill,
        borderTop: `0.05em solid ${themes[props.theme].outline}`,
        borderLeft: `0.05em solid ${themes[props.theme].outline}`,
        borderRight: `0.05em solid ${themes[props.theme].outline}`,
    }),
    range_modal: props => ({
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSizes.desktop,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
        },
        '@media (min-aspect-ratio: 3/4) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizes.ipad,
        },
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0.25em',
        backgroundColor: themes[props.theme].fill,
        border: `0.1em solid ${themes[props.theme].outline}`,
    }),
})
