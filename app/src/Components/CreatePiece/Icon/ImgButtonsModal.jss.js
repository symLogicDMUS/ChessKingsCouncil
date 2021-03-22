import {themes} from "../../styles/themes.jss";
import {modal} from "../../helpers/modal.jss";
import {makeStyles} from "@material-ui/core/styles";
import {fontSize0016, fontSize002} from "../../styles/fontSizes.jss";

export const button = (fontSize) => ({

});

export const useStyles = makeStyles({

    modal: props => ({
       ...modal,
        zIndex: 2,
    }),

    window: props => ({
        zIndex: 2,
        fontSize: fontSize002,
        width: '15em',
        height: '6em',
        backgroundColor: themes[props.theme].fill,
        border: `0.05em solid ${themes[props.theme].outline}`,
        borderRadius: '0.25em',
    }),

    top_flexbox: props => ({
        fontSize: fontSize002,
        width: '100%',
        height: '2em',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }),

    button_group: props => ({
        fontSize: fontSize002,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }),
    button: props => ({
        fontSize: fontSize0016,
        width: '7.5em',
        height: '2.5em',
    }),
    upload_button: props => ({
       marginRight: '1em'
    }),
    choose_button: props => ({
        marginLeft: '1em,'
    }),
    close_icon: props => ({
        fontSize: fontSize002,
        width: '2em',
        height: '2em',
    }),
}, {index: 1});