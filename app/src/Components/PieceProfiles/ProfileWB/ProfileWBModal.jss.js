import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {fontSize0023} from "../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    profile_wb_modal: props => ({
        width: '50vw',
        height: '47.5vh',
        position: 'absolute',
        left: '22.5vw',
        top: '12.5vw',
        padding: '0.25vh',
        borderRadius: '0.5rem',
        backgroundColor: themes[props.theme].fill,
        border: `0.075em solid ${themes[props.theme].outline}`,
    }),
    top_area: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
    }),
    wb_container: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 'auto',
    }),
    header: props => ({
        width: '100%',
        textAlign: 'center',
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        lineHeight: '1.2em',
    }),
    close_window_row: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }),
    close_icon: props => ({
        width: '1.5vh',
        height: '1.5vh',
        fontSize: '2.25vh',
    }),
}, {index: 1});