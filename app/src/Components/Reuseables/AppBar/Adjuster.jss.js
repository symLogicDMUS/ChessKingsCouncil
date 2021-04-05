import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    adjuster: props => ({
        opacity: 0,
        width: props.width,
        height: props.height,
        pointerEvents: 'none',
    }),
}, {index: 1});