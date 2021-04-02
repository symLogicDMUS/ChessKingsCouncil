import {themes} from "../../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {drawerItemWidth} from "../../NewGame/Customize/Customize.jss";

export const useStyles = makeStyles({
    captured_piece_images: props => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    }),
    captured_piece_images_modal: props => ({
        margin: 'auto',
        borderRadius: '0.25rem',
        backgroundColor: themes[props.theme].fill,
        border: `0.05rem solid ${themes[props.theme].odd_row}`,
    }),
    caption: props => ({
        flexGrow: 2,
        fontSize: '1.65vh',
        textAlign: 'center',
        transform: 'translate(-0.5em, 0)',
        color: themes[props.theme].text,
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
    }),
    outlined_box: props => ({
        fontSize: '1.75vh',
        border: `0.05em solid ${themes[props.theme].outline}`,
        borderRadius: '0.25em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        '@media screen and (max-width: 960px)': {
            width: '30vw',
        },
        '@media screen and (min-width: 960px)': {
            width: drawerItemWidth,
            marginLeft: '5%',
        },
    }),
    white_captured: props => ({
        '@media screen and (max-width: 960px)': {
            marginTop: '1rem',
            marginBottom: '1.5rem',
        },
    }),
    black_captured: props => ({
        '@media screen and (max-width: 960px)': {
            marginTop: '1.5rem',
        },
    }),
    label: props => ({
        fontSize: '0.95em',
        lineHeight: '1em',
        paddingLeft: '0.3em',
        paddingRight: '0.3em',
        color: themes[props.theme].text,
        backgroundColor: themes[props.theme].fill2,
        transform: 'translate(0.65em, -0.65em)',
    }),
    piece_list_area: props => ({
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingBottom: '1rem',
    }),
    piece_list: props => ({
        flexGrow: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '@media screen and (max-width: 960px)': {
            width: '25vw',
            marginLeft: '1vw',
            transform: 'translate(0, -0.5em)',
        },
        '@media screen and (min-width: 960px)': {
            width: drawerItemWidth,
            fontSize: '1.75vh',
            transform: 'translate(0, -0.5em)',
        },
    }),
    empty_list: props => ({
        '@media screen and (max-width: 960px)': {
            width: '30vw',
            fontSize: '2.3vh',
            height: '1.5em',
        },
        '@media screen and (min-width: 960px)': {
            width: drawerItemWidth,
            fontSize: '1.75vh',
            height: '1.5em',
            transform: 'translate(0, -0.5em)',
        },
    }),
    piece: props => ({
        fontSize: '2vh',
        height: '1.5em',
        marginLeft: '0.2em',
        marginTop: '0.2em',
    }),
    top_area: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }),
    close: props => ({
        minHeight: 'unset',
        height: '1vh',
        width: '1vh',
    }),
    close_icon: props => ({
        minHeight: 'unset',
        height: '1.75vh',
        width: '1.75vh',
        color: themes[props.theme].text,
    }),
    drag_icon: props => ({
        fontSize: '1.8vh',
        color: themes[props.theme].text_alt,
    }),
}, {index: 1});