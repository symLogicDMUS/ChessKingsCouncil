import {makeStyles} from "@material-ui/core/styles"

export const useStyles = makeStyles({
    span_arrow_buttons: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: props.fontSize,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: props.fontSize * 1.2
        },
        display: 'grid',
        gridTemplateColumns: "repeat(3, 3em)",
        gridTemplateRows: "repeat(3, 3em)",
        columnGap: '0.5em',
        rowGap: '0.5em',
    }),
});

