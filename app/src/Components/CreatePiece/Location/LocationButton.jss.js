import {themes} from "../../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles"

const location_button = (fontSize, theme) => ({
    fontSize: fontSize,
    width: '3.5em',
    height: '3.5em',
    minWidth: 0,
    minHeight: 0,
    color: themes[theme].text,
    border: '1px solid #2b2b2b'
});

export const useStyles = makeStyles({
    button_normal: (props) => ({
        background: '#414141',
        ...location_button(props.fontSize, props.theme),
    }),
    button_selected: (props) => ({
        ...location_button(props.fontSize, props.theme),
        background: '#4b6eaf',
        '&:hover': {
            background: '#4b6eaf',
        },
    }),
});