import {makeStyles} from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
    nav_bar: props => ({
        width: props.flexDirection === 'row' ? '100%' : 0,
        height: props.flexDirection === 'column' ? '92%' : 0,
        display: "flex",
        flexDirection: props.flexDirection,
        flexWrap: 'nowrap',
    }),
}));
