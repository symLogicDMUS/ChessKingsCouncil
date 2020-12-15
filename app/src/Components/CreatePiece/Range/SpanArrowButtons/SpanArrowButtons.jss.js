import {makeStyles} from "@material-ui/core/styles"

export const useStyles = makeStyles({
    span_arrow_buttons: props => ({
        display: 'grid',
        fontSize: props.fontSize*0.9,
        gridTemplateColumns: "repeat(3, 3em)",
        gridTemplateRows: "repeat(3, 3em)",
        columnGap: '0.5em',
        rowGap: '0.5em',
        // marginLeft: '-0.5em'
    }),
});

