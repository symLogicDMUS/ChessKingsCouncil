import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    save_resign_tool: props => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        width: '90%',
        height: '7em',
        marginLeft: '5%',
        marginBottom: '4%',
        backgroundColor: themes[props.theme].fill,
    }),
    option: props => ({
        fontSize: props.fontSize,
        width: '3.5em',
        height: '3.5em',
        color: themes[props.theme].button_text,
        border: '0.05em solid #2b2b2b',
    }),
    button: props => ({
        marginTop: '0.3em',
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
        width: '90%',
        height: '90%',
        color: themes[props.theme].text,
    }),
    text: props => ({
        fontSize: props.fontSize*0.7,
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].button_text,
        width: '120%',
    }),
})