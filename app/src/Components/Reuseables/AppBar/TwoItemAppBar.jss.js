import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    two_item_app_bar: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
    child1: props => ({
        flexGrow: 1,
    }),
    child2: props => ({
        marginRight: 'auto',
    }),
}, {index: 1});