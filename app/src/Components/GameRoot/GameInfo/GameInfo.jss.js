import {drawerItemWidth} from "../../NewGame/Customize/Customize.jss";
import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    game_info_modal: props => ({
        margin: 'auto',
        borderRadius: '0.25rem',
        border: `0.1rem solid ${themes[props.theme].odd_row}`,
    }),
    top_area: props => ({
        width: '60vw',
        height: '2.5vh',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: themes[props.theme].even_row,
    }),
    drag_icon: props => ({
        fontSize: '1.8vh',
        color: themes[props.theme].text_alt,
        cursor: 'move',
    }),
    caption: props => ({
        flexGrow: 2,
        fontSize: '1.65vh',
        textAlign: 'center',
        transform: 'translate(-0.5em, 0)',
        color: themes[props.theme].text,
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
    }),
    game_info_flexbox: props => ({
        fontSize: '2vh',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // width: drawerItemWidth,
        marginBottom: '1em',
        // marginLeft: '1em',
        alignItems: 'flex-end',
        borderTop: `0.05em solid ${themes[props.theme].outline}`,
        borderBottom: `0.05em solid ${themes[props.theme].outline}`,
    }),
    /*switch from direction of flow of data from previous*/
    game_info_table: props => ({
        display: 'grid',
        gridTemplateColumns: '20vw 20vw 20vw',
    }),
    cell: props => ({
        '@media screen and (max-width: 960px)': {
            height: '4vh',
            display: 'flex',
            flexDirection: 'column',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '2vh',
        },
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
    }),
    col1: props => ({
        width: '40%',
        paddingLeft: '0.5rem',
    }),
    col2: props => ({
        width: '60%',
        textAlign: 'right',
        paddingRight: '0.5rem',
    }),
    row1: props => ({
        paddingLeft: '0.5em',
        backgroundColor: themes[props.theme].odd_row,
        borderLeft: `0.1em solid ${themes[props.theme].even_row}`,
        borderRight: `0.1em solid ${themes[props.theme].even_row}`,
    }),
    row2: props => ({
        paddingLeft: '0.5em',
        backgroundColor: themes[props.theme].even_row,
        borderLeft: `0.1em solid ${themes[props.theme].odd_row}`,
        borderRight: `0.1em solid ${themes[props.theme].odd_row}`,
    }),
    text: props => ({
        fontSize: '2vh',
        marginTop: 'auto',
    }),
}, {index: 1});