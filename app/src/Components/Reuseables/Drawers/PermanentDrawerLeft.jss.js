import {makeStyles} from "@material-ui/core/styles";

const z = 5;
export const leftDrawerWidth = '18vw';

export const useStyles = makeStyles({
    paper: props => ({
        zIndex: z,
        width: leftDrawerWidth,
        '@media screen and (max-width: 960px)': {
            width: 0,
        },
    }),
}, {index: 1});