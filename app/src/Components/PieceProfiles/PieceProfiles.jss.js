import {themes} from "../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {miniVariantIconsColumnWidth} from "../Reuseables/Drawers/MiniVariantDrawer.jss";

export const profileWBMarginWide = '1.75vw';
export const profileWBMarginThin = '2.5vw';

export const useStyles = makeStyles({
    piece_profiles: props => ({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: themes[props.theme].fill,
        border: `0.12rem solid ${themes[props.theme].odd_row}`,
        '@media screen and (max-width: 960px)': {
            height: '87.5vh',
            width: `calc(100% - ${miniVariantIconsColumnWidth}px)`,
            borderTop: 'unset',
        },
        '@media screen and (min-width: 960px)': {
            width: '50vw',
            height: '40vw',
            borderRadius: '0.5rem',
        },
    }),
    profiles_area: props => ({
        overflowY: 'scroll',
    }),
}, {index: 1});
