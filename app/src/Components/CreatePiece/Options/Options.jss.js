import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    options_tool: (props) => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    }),
    /* screens thinner than 960px: */
    options_window: props => ({
        zIndex: 10,
        margin: 'auto',
        borderRadius: '0.5rem',
        backgroundColor: themes[props.theme].fill,
        border: `0.05rem solid ${themes[props.theme].odd_row}`,
    }),
    options_area: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',

    }),
    smOption: props => ({
        marinTop: '1vw',
        marginLeft: '2vw',
        marginRight: '2vw',
        marginBottom: '2vw',
    }),
    draggable_icon: props => ({
        color: themes[props.theme].text_alt,
        cursor: 'move',
    }),
}, {index: 1});
