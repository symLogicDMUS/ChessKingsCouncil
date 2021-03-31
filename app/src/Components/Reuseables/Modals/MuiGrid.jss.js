import {fontSize001685, fontSize002} from "../../styles/fontSizes.jss";
import {appBarHeight} from "../Drawers/PersistentDrawer.jss";
import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {miniVariantIconsColumnWidth} from "../Drawers/MiniVariantDrawer.jss";

const widthLg = '90vw';

export const useStyles = makeStyles((theme) => ({
    window: props => ({
        '@media screen and (max-width: 960px)': {
            width: '100vw',
            height: `calc(100vh - ${appBarHeight}px)`,
            position: 'absolute',
            top: appBarHeight,
            left: 0,
        },
        '@media screen and (min-width: 960px)': {
            width: widthLg,
            height: '90vh',
            position: 'absolute',
            top: `calc(${appBarHeight}px)`,
            left: '5vw',
        },
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0.1rem',
        borderRadius: '1rem',
        border: `0.08rem solid ${themes[props.theme].odd_row}`,
        backgroundColor: themes[props.theme].fill,
    }),
    item_choices: props => ({
        '@media screen and (max-width: 960px)': {
            width: '95vw',
            height: '80vh',
            padding: '2.5vw',
            paddingLeft: '3.5vw',
        },
        '@media screen and (min-width: 960px)': {
            width: '85.5vw',
            height: '65vh',
        },
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        overflow: 'scroll',
        borderRadius: '0.015em',
        border: `0.002em solid ${themes[props.theme].outline}`,
        backgroundColor: themes[props.theme].modal_fill,
    }),
    bottom_flexbox: props => ({
        display: 'flex',
        flexDirection: 'row',
        '@media screen and (max-width: 960px)': {
            width: '95vw',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: '1rem',
            paddingBottom: '1rem',
        },
        '@media screen and (min-width: 960px)': {
            width: '85.5vw',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        flexGrow: 3,
    }),
    bottom_button: props => ({
        border: `0.025rem solid ${themes[props.theme].outline}`,
    }),
    ok_button: props => ({
        '@media screen and (max-width: 960px)': {
            marginRight: '1rem',
        },
        '@media screen and (min-width: 960px)': {
            marginRight: '2vw'
        },
    }),
    close_icon: props => ({
        fontSize: fontSize002,
        width: '1.5em',
        height: '1.5em',
    }),
    show_names_gen: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: '1rem',
        },
    }),
    show_names_checkbox: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: '1.1rem'
        },
    }),
}), {index: 1});
