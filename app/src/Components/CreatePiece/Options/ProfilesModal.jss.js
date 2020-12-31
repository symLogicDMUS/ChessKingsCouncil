import { makeStyles } from "@material-ui/core/styles";
import { modal } from "../../helpers/modal.jss";

export const useStyles = makeStyles({
    modal: {
        ...modal,
    },
    top_bar: props => ({
        height: '2em',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px dashed #b1faae',
    }),
    title: props => ({
        fontSize: props.fontSize,
        border: '1px dashed red',

    }),
    close: props => ({
       fontSize: props.fontSize,
       width: '2em',
       height: '2em',
    }),
});
