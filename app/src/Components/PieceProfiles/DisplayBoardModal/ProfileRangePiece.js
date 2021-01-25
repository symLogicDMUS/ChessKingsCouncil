import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    piece: props => ({
       fontSize: props.fontSize,
       width: '1em',
       height: '1em',
    }),
})