import {makeStyles} from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
    nav_bar: props => ({
        ...props.style,
        fontSize: props.fontSize,
        width: props.width,
        height: props.height,
        display: "flex",
        flexDirection: props.flexDirection,
        flexWrap: 'nowrap',
    }),
}));