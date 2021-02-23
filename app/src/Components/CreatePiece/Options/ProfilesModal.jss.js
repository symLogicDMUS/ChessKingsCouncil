import { makeStyles } from "@material-ui/core/styles";
import { modal } from "../../helpers/modal.jss";
import {themes} from "../../styles/themes.jss";

export const close_icon = (fontSize) => ({
    fontSize: fontSize,
    width: '1em',
    height: '1em',
});

export const useStyles = makeStyles({
    modal: {
        ...modal,
        zIndex: 7,
    },
    top_bar: props => ({
        height: '2em',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
    title: props => ({
        fontSize: props.fontSize,
        color: themes[props.theme].text,
        marginLeft: '1em'
    }),
}, {index: 1});
