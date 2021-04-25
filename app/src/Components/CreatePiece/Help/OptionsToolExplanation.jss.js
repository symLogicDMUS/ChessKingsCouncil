import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    option_area: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
    }),
    icon: props => ({
        float: 'left',
        width: '3.75rem',
        height: '3.75rem',
        marginLeft: '0.65rem',
        marginRight: '0.65rem',
        transform: 'translate(0, 0.5rem)',
    }),
    paragraph: props => ({
        color: themes[props.theme].text,
        fontSize: '1rem',
    }),
    icon_margin: props => ({
        marginLeft: '0.5rem',
    }),
}, {index: 1});