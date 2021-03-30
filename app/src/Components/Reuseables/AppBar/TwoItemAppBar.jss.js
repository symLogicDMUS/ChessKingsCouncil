import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    two_item_app_bar: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }),
}, {index: 1});