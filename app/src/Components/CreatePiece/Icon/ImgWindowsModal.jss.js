import {makeStyles} from "@material-ui/core/styles";
import {modal} from "../../helpers/modal.jss";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    modal: props => ({
        ...modal,
        zIndex: 7,
    }),
    window: props => ({
        width: '85vw',
        backgroundColor: themes[props.theme].fill,
        borderRadius: '0.5rem',
    }),
    x_close_flexbox: props => ({
        width: '84vw',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }),
}, {index: 1});