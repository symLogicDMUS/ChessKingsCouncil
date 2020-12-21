import {makeStyles} from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
    nav_bar: props => ({
        fontSize: props.fontSize,
        width: props.flexDirection === 'row' ? props.width : 0,
        height: props.flexDirection === 'column' ? props.height : '2.25em',
        display: "flex",
        flexDirection: props.flexDirection,
        flexWrap: 'nowrap',
    }),
}));
