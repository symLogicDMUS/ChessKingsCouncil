import {themes} from "../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";

export const profileWBMarginDesktop = '1.75vw';
export const profileWBMarginMobile = '2.5vw';

export const useStyles = makeStyles({
    piece_profiles: props => ({
        display: 'flex',
        flexDirection: 'column',
        '@media screen and (max-width: 960px)': {
            width: '100vw',
            height: '80vh',
        },
        '@media screen and (min-width: 960px)': {
            width: '50vw',
            height: '40vw',
            borderRadius: '0.5rem',
        },
        backgroundColor: themes[props.theme].fill,
        border: `0.12rem solid ${themes[props.theme].odd_row}`,
    }),
    profiles_window: props => ({
        overflowY: 'scroll',
    }),
}, {index: 1});
