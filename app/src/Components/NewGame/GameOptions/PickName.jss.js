import makeStyles from "@material-ui/core/styles/makeStyles";

export const text_field = (fontSize) => ({
    fontSize: fontSize,
    color: 'black',
    width: '25em',
})

export const useStyles = makeStyles({
    title: props =>  ({
        fontSize: props.fontSize,
        fontFamily: 'Garamond',
        lineHeight: '1em',
    }),
});
