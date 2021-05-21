import {themes} from "../styles/themes/themes.jss";
import {makeStyles} from "@material-ui/core/styles";

export const pieceProfilesLgWidth = '50vw';
export const pieceProfilesLgHeight = '40vw';
export const pieceProfilesSmHeight = '87.5vh';

export const profileWBMarginWide = '1.75vw';
export const profileWBMarginThin = '2.5vw';

export const useStyles = makeStyles({
    piece_profiles: props => ({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: themes[props.theme].fill,
        border: `0.12rem solid ${themes[props.theme].odd_row}`,
        '@media screen and (max-width: 960px)': {
            width: '100%',
            height: pieceProfilesSmHeight,
            paddingTop: '1vh',
            flexGrow: 1,
        },
        '@media screen and (min-width: 960px)': {
            width: pieceProfilesLgWidth,
            height: pieceProfilesLgHeight,
            borderRadius: '0.5rem',
        },
    }),
    profiles_area: props => ({
        overflowY: 'scroll',
    }),
}, {index: 1});
