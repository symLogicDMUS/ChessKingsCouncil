import {lighten, makeStyles} from "@material-ui/core/styles"
import {themes} from "../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    game_option: props => ({
        minWidth: 16,
        minHeight: 16,
        display: 'flex',
        padding: 0,
        flexDirection: 'column',
        color: themes[props.theme].text,
        "& .MuiSvgIcon-root": {
            width: '3vw',
            height: '3vw',
            color: themes[props.theme].text,
        },
        "& .MuiTypography-root": {
            fontSize: '0.9rem',
            marginTop: '0.2rem',
            fontFamily: 'Roboto-Light, Roboto',
            color: themes[props.theme].button_text,
        },
    }),
    create_piece_option: props => ({
        minWidth: 0,
        minHeight: 0,
        margin: 'unset',
        width: '3.875vw',
        height: '3.875vw',
        fontSize: '1.1625vw',
        borderRadius: '0.25em',
        color: themes[props.theme].text,
        border: `0.04em solid ${themes[props.theme].outline}`,
        backgroundColor: lighten(themes[props.theme].fill, 0.01),
        "& .MuiSvgIcon-root": {
            width: '2.15vw',
            height: '2.15vw',
            marginTop: '0.25rem',
            color: themes[props.theme].button_text,
        },
        "& .MuiTypography-root": {
            fontSize: '1vw',
            fontFamily: 'Roboto-Light, Roboto',
            color: themes[props.theme].button_text,
        },
    }),
    label: props => ({
        display: "flex",
        flexDirection: "column",
        border: 'black',
    }),
}, {index: 1});