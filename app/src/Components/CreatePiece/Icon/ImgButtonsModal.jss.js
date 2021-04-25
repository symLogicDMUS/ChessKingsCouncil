import {themes} from "../../styles/themes/themes.jss";
import {modal} from "../../helpers/modal.jss";
import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles({
    modal: props => ({
       ...modal,
        zIndex: 2,
    }),
    window: props => ({
        zIndex: 2,
        width: '45vw',
        height: '15vw',
        backgroundColor: themes[props.theme].fill,
        border: `0.05em solid ${themes[props.theme].outline}`,
        borderRadius: '0.25em',
    }),
    top_area: props => ({
        width: '100%',
        height: '2em',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }),
    button_group: props => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }),
    button: props => ({
        fontSize: '1.6vh',
        width: '7.5em',
        height: '2.5em',
    }),
    upload_button: props => ({
       marginRight: '1em'
    }),
    choose_button: props => ({
        marginLeft: '1em,'
    }),
    close: props => ({
        width: '2.25vh',
        height: '2.25vh',
    }),
    close_icon: props => ({
        width: '2vh',
        height: '2vh',
    }),
}, {index: 1});