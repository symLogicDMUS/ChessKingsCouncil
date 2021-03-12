import {makeStyles} from "@material-ui/core/styles";
import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {getTextWidth} from "../helpers/getTextWidth.jss";
import {
    fontSize0016,
    fontSize002,
    fontSize0023,
    fontSize00301, fontSize0040, fontSize0050,
    fontSizeW01, fontSize0067,
    fontSize01, fontSize018, fontSize00219,
} from "../styles/fontSizes.jss";
import {appBarHeight} from "../Reuseables/Drawers/PersistentDrawer.jss";

export const parchment = () => ({
    '@media screen and (min-device-width: 1040px)': {
        width: availWidth() * 0.8,
        height: availHeight() * 0.8,
    },
    '@media screen and (max-device-width: 1040px)': {
        width: availWidth()*0.95,
        height: availHeight()*0.88 - appBarHeight,
        flexGrow: 100,
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
});

export const useStyles = makeStyles({

    council_rules: props => ({
        '@media screen and (min-device-width: 1040px)': {
            width: '100%',
            height: availHeight(),
        },
        '@media screen and (max-device-width: 1040px)': {
            width: '99%',
            height: availHeight() * 0.88,
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }),
    title: props => ({
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSize018,
        },
        '@media screen and (max-device-width: 1040px)': {
            fontSize: fontSizeW01,
        },
        color: 'black',
        fontFamily: 'Garamond',
        lineHeight: '1.2em',
    }),
    parchment_desktop: props => ({
        ...parchment(),
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%, 100%',
        backgroundImage: 'url("/Images/CouncilRules/parchment.svg")',
    }),
    parchment_mobile: props => ({
        ...parchment(),
        backgroundRepeat: 'repeat-y',
        backgroundSize: '100%, 100%',
        backgroundImage: 'url("/Images/CouncilRules/scroll-content.svg")',
    }),
    scroll_end_container: props => ({
        width: availWidth(),
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }),
    scroll_end: props => ({
        flexGrow: 10,
        height: '100%',
        minWidth: 'unset',
    }),
    kings_flexbox: props => ({
        fontSize: fontSize002,
        '@media screen and (min-device-width: 1040px)': {
            width: getTextWidth('Council of Kings', fontSize018, 'Garamond'),
        },
        '@media screen and (max-device-width: 1040px)': {
            width: getTextWidth('Council of Kings', fontSizeW01, 'Garamond'),
        },
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
    king_icon: props => ({
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSize01,
        },
        '@media screen and (max-device-width: 1040px)': {
            fontSize: fontSize00301,
        },
        width: '1em',
        height: '1em'
    }),
    paragraph: props => ({
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSize00301,
            width: getTextWidth('Council of Kings', fontSize018, 'Garamond'),
        },
        '@media screen and (max-device-width: 1040px)': {
            fontSize: fontSize002,
            width: getTextWidth('Council of Kings', fontSizeW01, 'Garamond'),
            flexGrow: 100,
            height: availHeight() * 0.7,
        },
        fontFamily: 'Garamond',
        color: 'black',
    }),
    //child of paragraph
    rule_list: props => ({
        marginTop: '-0.1em'
    }),
}, {index: 1});