import {makeStyles} from "@material-ui/core/styles";
import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {getTextWidth} from "../helpers/getTextWidth.jss";
import {
    fontSize0016,
    fontSize002,
    fontSize0023,
    fontSize00301, fontSize0040, fontSize0050,
    fontSize0060, fontSize0066,
    fontSize01, fontSize018
} from "../styles/fontSizes.jss";

export const parchment = () => ({
    '@media screen and (min-width: 768px)': {
        width: availWidth() * 0.8,
        height: availHeight() * 0.8,
    },
    '@media screen and (max-width: 767px)': {
        width: '95%',
        flexGrow: 100,
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
});

const desktopScaler = 8;
const mobileScaler = 3;
export const useStyles = makeStyles({

    council_rules: props => ({
        '@media screen and (min-width: 768px)': {
            width: '100%',
            height: availHeight(),
        },
        '@media screen and (max-width: 767px)': {
            width: '99%',
            height: availHeight() * 0.88,
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }),
    title: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize018,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSize0060,
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
        backgroundImage: 'url("/Images/CouncilRules/scroll-content.svg")',
    }),
    scroll_end: props => ({
        width: '100%',
        height: '5%',
    }),
    kings_flexbox: props => ({
        fontSize: fontSize002,
        '@media screen and (min-width: 768px)': {
            width: getTextWidth('Council of Kings', fontSize018, 'Garamond'),
        },
        '@media screen and (max-width: 767px)': {
            width: getTextWidth('Council of Kings', fontSize0060, 'Garamond'),
        },
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
    king_icon: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize01,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSize00301,
        },
        width: '1em',
        height: '1em'
    }),
    paragraph: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize00301,
            width: getTextWidth('Council of Kings', fontSize018, 'Garamond'),
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSize0023,
            width: getTextWidth('Council of Kings', fontSize0060, 'Garamond'),
            flexGrow: 100,
        },
        fontFamily: 'Garamond',
        color: 'black',
    }),
    //child of paragraph
    rule_list: props => ({
        marginTop: '-0.1em'
    }),
});