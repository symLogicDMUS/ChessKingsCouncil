import {makeStyles} from "@material-ui/core/styles"
import {button} from "../CreatePiece.jss";
import {themes} from "../../styles/themes.jss";

export const buttonOrderMobile = {
    d5: 1,
    e5: 2,
    d4: 3,
    e4: 4,
}

export const location_button = (theme, rf) => ({
    ...button(theme),
    /*tall phones*/
    '@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)': {
        order : buttonOrderMobile[rf],
    },
    /*tablets*/
    '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1), ': {
        order : buttonOrderMobile[rf],
    },
    border: `0.04em solid ${themes[theme].outline}`,
});

export const useStyles = makeStyles({
    button_normal: (props) => ({
        background: '#414141',
        ...location_button(props.theme, props.rf),
    }),
    button_selected: (props) => ({
        ...location_button(props.theme, props.rf),
        background: '#4b6eaf',
        '&:hover': {
            background: '#4b6eaf',
        },
    }),
});