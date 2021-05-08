import {makeStyles} from "@material-ui/core/styles";

export const originTransform = {vertical: 'top', horizontal: 'right'};

export const useStyles = makeStyles({
    content: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
}, {index: 1});
