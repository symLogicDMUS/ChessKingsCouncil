import makeStyles from "@material-ui/core/styles/makeStyles";

export const text_field = (fontSize) => ({
    fontSize: fontSize,
    color: 'black',
    width: '25em',
})

export const useStyles = makeStyles({
    title: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: props.fontSize,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: props.fontSize * 0.85,
            width: '100%',
        },
        fontFamily: 'Garamond',
        lineHeight: '1em',
    }),
});
