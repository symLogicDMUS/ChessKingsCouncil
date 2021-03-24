import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    profile: props => ({
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        '@media screen and (max-width: 1040px)': {
            flexDirection: 'row',
            justifyContent: 'flex-start',
        },
        '@media screen and (min-width: 1040px)': {
            flexDirection: 'column',
        },
    }),
}, {index: 1});
