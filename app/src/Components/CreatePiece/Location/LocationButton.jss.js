import {themes} from "../../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles"
import {fontSize0022, fontSize0035, fontSize0036} from "../../styles/fontSizes.jss";

const buttonOrderMobile = {
    d5: 1,
    e5: 2,
    d4: 3,
    e4: 4,
}

const location_button = (theme, rf) => ({
    '@media (max-aspect-ratio: 1/1)': {
        fontSize: fontSize0035,
        order : buttonOrderMobile[rf],
        margin: 'auto',
    },
    '@media (min-aspect-ratio: 3/4) and (max-aspect-ratio: 1/1)':{
        fontSize: fontSize0036,
        margin: 'auto',
    },
    '@media (min-aspect-ratio: 1001/1000)': {
        fontSize: fontSize0022,
        margin: 'unset',
    },
    width: '3.5em',
    height: '3.5em',
    minWidth: 0,
    minHeight: 0,
    color: themes[theme].text,
    borderRadius: '0.2em',
    border: `0.04em solid ${themes[theme].outline}`
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