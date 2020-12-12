import {makeStyles} from "@material-ui/core/styles"

export const useStyles = makeStyles({
    span_arrow_buttons: props => ({
        position: 'absolute',
        fontSize: props.fontSize*0.85,
        left: '12em',
        display: 'grid',
        gridTemplateColumns: "repeat(3, 3em)",
        gridTemplateRows: "repeat(3, 3em)",
        columnGap: '0.5em',
        rowGap: '0.5em',
    }),
});

