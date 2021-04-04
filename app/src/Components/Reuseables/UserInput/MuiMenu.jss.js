import {themes} from "../../styles/themes.jss";
import {lighten} from '@material-ui/core/styles';

export const styles = {
    paper: props => ({
        border: `0.08rem solid ${lighten(themes[props.theme].odd_row, 0.08)}`,
        backgroundColor: themes[props.theme].button_fill,
        paddingLeft: '0.75rem',
        paddingRight: '0.75rem',
        paddingTop: '0.25rem',
        paddingBottom: '0.25rem',
    }),
}