import makeStyles from "@material-ui/core/styles/makeStyles";
import {drawerWidth} from "../../Reuseables/PermanentDrawer.jss";
import {themes} from "../../styles/themes.jss";

const optionSize = '5em';

export const useStyles = makeStyles({
    save_resign_tool: props => ({
        zIndex: 1,
        width: {drawerWidth},
        height: '12em',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: themes[props.theme].fill,
        marginBottom: '5%',
    }),
    game_info_titles: props => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        flexWrap: 'no-wrap',
        width: '100%',
        // marginTop: '5%',
    }),
    game_info: props => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        flexWrap: 'no-wrap',
        width: '100%',
    }),
    options_flexbox: props => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        width: '90%',
        height: optionSize,
        marginLeft: '5%',
        marginTop: '1%',

    }),
    option: props => ({
        fontSize: props.fontSize,
        height: '6em',
        width: '6em',
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    button: props => ({
        width: '120%',
        height: '120%',
        '&:hover': {
            background: 'none'
        },
    }),
    label: props => ({
        display: "flex",
        flexDirection: "column",
        border: 'black',
    }),
    icon: props => ({
        fontSize: props.fontSize,
        width: '3.5em',
        height: '3.5em',
        color: themes[props.theme].text,
    }),
    option_text: props => ({
        fontSize: props.fontSize*1.2,
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].button_text,
        width: '4em'
    }),
    title_labels_text: props => ({
        fontSize: props.fontSize*0.5,
        width: '30%',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].button_text,
        textAlign: 'center'
    }),
    title_text: props => ({
        fontSize: props.fontSize*1.5,
        width: '30%',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].button_text,
        textAlign: 'center'
    }),
})