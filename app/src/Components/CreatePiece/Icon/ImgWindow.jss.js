import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

const windowSizeLg = "10.625vw";
export const originTransform = {vertical: 'top', horizontal: 'right'};


export const useStyles = makeStyles({
    img_window: props => ({
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        borderRadius: '0.35rem',
        backgroundColor: themes[props.theme].fill,
        border: `0.005rem solid ${themes[props.theme].outline}`,
        '@media screen and (max-width: 960px)': {
            '--widthA': '100vw',
            '--widthB': `calc(var(--widthA) - ${miniVariantIconsColumnWidth}px)`,
            '--size': 'calc(var(--widthB) * 0.42)',
            width: 'var(--size)',
            height: 'var(--size)',
        },
        '@media screen and (min-width: 960px)': {
            width: windowSizeLg,
            height: windowSizeLg,
        },
    }),
    white_window: props => ({
        '--widthA': '100vw',
        '--widthB': `calc(var(--widthA) - ${miniVariantIconsColumnWidth}px)`,
        '--size': 'calc(var(--widthB) * 0.42)',
        '--doubleSize': 'calc(var(--size) * 2)',
        '--space': 'calc(var(--widthB) - var(--doubleSize))',
        '--margin': 'calc(var(--space) / 3)',
        '--halfMargin': 'calc(var(--margin) * 0.5)',
        '@media screen and (max-width: 960px)': {
            marginTop: `var(--margin)`,
            marginBottom: 'var(--margin)',
            marginLeft: 'var(--margin)',
            marginRight: 'var(--halfMargin)',
            transform: 'translate(-0.05rem,  0)',
        },
    }),
    black_window: props => ({
        '--widthA': '100vw',
        '--widthB': `calc(var(--widthA) - ${miniVariantIconsColumnWidth}px)`,
        '--size': 'calc(var(--widthB) * 0.42)',
        '--doubleSize': 'calc(var(--size) * 2)',
        '--space': 'calc(var(--widthB) - var(--doubleSize))',
        '--margin': 'calc(var(--space) / 3)',
        '--halfMargin': 'calc(var(--margin) * 0.5)',
        '@media screen and (max-width: 960px)': {
            marginTop: `var(--margin)`,
            marginBottom: 'var(--margin)',
            marginLeft: 'var(--halfMargin)',
            marginRight: 'var(--margin)',
            transform: 'translate(0.05rem,  0)',
        },
    }),
    img_label: props => ({
        display: 'flex',
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }),
    icon: (props) => ({
        fontSize: '1.1rem',
        color: themes[props.theme].text,
        marginRight: '0.2rem',
    }),
    text: props => ({
        fontSize: '1.2rem',
        color: themes[props.theme].text,
    }),
    borderRadius: props => ({
        '@media screen and (max-width: 960px)': {
            borderRadius: '0.035rem',
        },
        '@media screen and (min-width: 960px)': {
            borderRadius: '0.25rem',
        },
    }),
    img_upload_option: props => ({
        backgroundColor: 'unset',
    }),
    menu_item: props => ({
        padding: 0,
    }),
}, {index: 1});
