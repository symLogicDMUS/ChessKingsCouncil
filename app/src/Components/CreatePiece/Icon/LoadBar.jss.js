import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export const useStyles = makeStyles({
    backdrop: props => ({
        zIndex: 6,
        display: 'flex',
        flexDirection: 'column',
    }),
    window: props => ({
        borderRadius: '0.25rem',
        backgroundColor: themes[props.theme].fill,
        border: `0.065rem solid ${themes[props.theme].odd_row}`,
        '@media screen and (max-width: 960px)': {
            width: `calc(100vw - ${miniVariantIconsColumnWidth}px)`,
            padding: '1.2rem',
        },
        '@media screen and (min-width: 960px)': {
            width: '66.6667vw',
            padding: '1rem',
        },
    }),
    title: props => ({
        color: themes[props.theme].text,
        width: '100%',
    }),
    load_bar: props => ({
        width: '100%',
        height: '3.5rem',
        border: `0.05rem solid ${themes[props.theme].text}`,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
    }),
    load_progress: props => ({
        height: '3.5rem',
        width: props.percentage,
        backgroundColor: themes[props.theme].text,
    }),
}, {index: 1});