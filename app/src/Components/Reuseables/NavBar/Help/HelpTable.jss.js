import {themes} from "../../../styles/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    window: props => ({
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 11,
    }),
    help_table: props => ({
        width: '100vw',
        height: '95vh',
        zIndex: 11,
    }),
    list_item: props => ({
        flexGrow: 2,
        paddingLeft: 12,
        paddingBottom: '0.1rem'
    }),

    arrow_button_top: props => ({
        display: 'none',
    }),
    arrow_button_bottom: props => ({
        height: '2rem',
        borderRadius: 0,
        border: `0.075rem solid ${themes[props.theme].outline}`,
        "& .MuiSvgIcon-root": {
            display: 'none',
        },
    }),
    text: props => ({
        '&:hover': {
            color: themes[props.theme].sqr_hover_alt,
        },
    }),
    top: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes[props.theme].fill,
        '@media screen and (max-width: 412px)': {
            borderTopLeftRadius: '0.35em',
            borderTopRightRadius: '0.35em',
            border: `0.05em solid ${themes[props.theme].odd_row}`,
        },
        "@media screen and (min-width: 412px) and (max-width: 768px)": {
            borderTopLeftRadius: '0.35em',
            borderTopRightRadius: '0.35em',
            border: `0.05em solid ${themes[props.theme].odd_row}`,
        },
        '@media screen and (min-width: 768px) and (max-width: 960px)': {
            borderTopLeftRadius: '0.35em',
            borderTopRightRadius: '0.35em',
            border: `0.01em solid ${themes[props.theme].odd_row}`,
        },
        '@media screen and (min-width: 960px)': {
            borderTopLeftRadius: '0.35em',
            borderTopRightRadius: '0.35em',
            border: `0.08em solid ${themes[props.theme].odd_row}`,
        },
    }),
    title: props => ({
        width: '100%',
        textAlign: 'center',
        fontSize: '1.1rem',
        color: themes[props.theme].text,
    }),
}, {index: 1})