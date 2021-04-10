import {lighten, withStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import Switch from "@material-ui/core/Switch";

export const RangeAnalysisSwitch = withStyles({
    switchBase: props => ({
        color: themes[props.theme].text,
        '&$checked': {
            color: lighten(themes[props.theme].light_in_range, 0.3),
        },
        '&$checked + $track': {
            backgroundColor: themes[props.theme].light_in_range,
        },
        ...props.style
    }),
    checked: props => ({}),
    track: props => ({}),
})(Switch);
