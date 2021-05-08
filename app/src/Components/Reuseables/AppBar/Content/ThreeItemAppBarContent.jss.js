import {makeStyles} from "@material-ui/core/styles";

export const originTransform = {vertical: 'top', horizontal: 'right'};

export const useStyles = makeStyles({
    content: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
    }),
}, {index: 1});
