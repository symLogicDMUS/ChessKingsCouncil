import makeStyles from "@material-ui/core/styles/makeStyles";

export const sqrSize = {
    desktop: '11vh',
    mobile: '10.5vw',
};

export const useStyles = makeStyles({
    board: props => ({
        display: 'grid',
        '@media screen and (min-width: 1040px)': {
            boxShadow: '0 0 0.1em white',
            margin: 'auto',
        },
    }),
}, {index: 1});
