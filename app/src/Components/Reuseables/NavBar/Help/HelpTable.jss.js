import {themes} from "../../../styles/themes/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {darken, lighten} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    window: props => ({
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 11,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        overflowY: 'scroll',
    }),
    accordion: props => ({
        "& .MuiAccordionSummary-root": {
            backgroundColor: darken(themes[props.theme].fill, 0.035),
            borderBottom: `0.05rem solid ${themes[props.theme].odd_row}`,
        },
        "& .MuiAccordionDetails-root": {
            backgroundColor: darken(themes[props.theme].fill, 0.02),
        },
        "& .MuiSvgIcon-root": {
            color: themes[props.theme].text,
        },
        "& .MuiTouchRipple-root": {
            color: themes[props.theme].text,
        },
    }),
    accordion_summary_text: props => ({
        color: themes[props.theme].text,
        fontSize: '1rem',
    }),
    list: props => ({
        width: '100%',
    }),
    list_item: props => ({
        color: themes[props.theme].text,
    }),
    top: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: darken(themes[props.theme].fill, 0.035),
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