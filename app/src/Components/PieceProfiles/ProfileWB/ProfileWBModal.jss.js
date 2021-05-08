import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";

export const boardGridAdjust =  {
    top: '-14.6vw'
};

export const useStyles = makeStyles({
    profile_wb_modal: props => ({
        zIndex: 10,
        // height: '47.5vh',
        position: 'absolute',
        left: '22.5vw',
        top: '12.5vw',
        paddingTop: '0.25rem',
        paddingRight: '0.25rem',
        paddingBottom: '0.5rem',
        borderRadius: '0.5rem',
        backgroundColor: themes[props.theme].fill,
        border: `0.075rem solid ${themes[props.theme].odd_row}`,
        '@media screen and (max-width: 500px)': {
            width: '99.5vw'
        },
        '@media screen and (min-width: 500px)': {
            width: '50vw',
        },
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
