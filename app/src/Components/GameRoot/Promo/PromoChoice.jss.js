import {makeStyles} from "@material-ui/core/styles";

export const timeout = {
    enter: 500,
    exit: 500,
};

export const style = (isCurrent, isLast) => {
    if (isLast && !isCurrent) {
        return {
            display: 'none'
        }
    }
    return {
        transitionDelay: isCurrent ? 250 : 0,
    }
};

export const useStyles = makeStyles({
    promo_choice: props => ({
        position: 'absolute',
        '@media screen and (max-width: 960px)': {
            width: '40vw',
            height: '40vw',
            left: '30vw',
            top: `calc(50vh - 20vw)`,
        },
        '@media screen and (min-width: 960px)': {
            width: '20vw',
            height: '20vw',
            left: '40vw',
            top: `calc(50vh - 10vw)`,
        },
        cursor: 'pointer',
    }),
}, {index: 1});
