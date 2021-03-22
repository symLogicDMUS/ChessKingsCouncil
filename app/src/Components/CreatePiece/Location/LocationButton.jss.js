import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../../styles/themes.jss";
import {sqrSize} from "../Board/CreatePieceBoard.jss";

export const useStyles = makeStyles({
    button: props => ({
        color: themes[props.theme].text,
    }),
    button_normal: (props) => ({
        background: themes[props.theme].button_fill,
        border: `0.04em solid ${themes[props.theme].outline}`,
    }),
    button_selected: (props) => ({
        background: themes[props.theme].location_button_selected,
        '&:hover': {
            background: themes[props.theme].location_button_selected,
        },
    }),
    sqr_button: props => ({
        width: sqrSize.mobile,
        height: sqrSize.mobile,
        '@media screen and (max-width: 1040px)': {
            maxWidth: '11vh',
            maxHeight: '11vh',
        },
        "& .MuiIconButton-root": {
            width:'100%',
            height: '100%',
        },
        backgroundColor: themes[props.theme].dark_in_range,
    }),

    text: props => ({
        fontSize: '3.5vw',
        color: '#e3f2fd',
    }),
}, {index: 1});