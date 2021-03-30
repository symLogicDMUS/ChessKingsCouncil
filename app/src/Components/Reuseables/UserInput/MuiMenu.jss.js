import {themes} from "../../styles/themes.jss";
import {lighten} from '@material-ui/core/styles';

export const styles = {
    paper: props => ({
        border: `0.08rem solid ${lighten(themes[props.theme].odd_row, 0.08)}`,
        backgroundColor: themes[props.theme].odd_row,
        padding: '0.5rem',
    }),
}