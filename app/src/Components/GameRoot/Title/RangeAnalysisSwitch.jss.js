import { themes } from "../../styles/themes/themes.jss";
import { lighten } from "@material-ui/core/styles";

export const styles = {
    switchBase: (props) => ({
        color: themes[props.theme].text,
        // marginRight: -27,
        "&$checked": {
            color: lighten(themes[props.theme].switch_active, 0.3),
        },
        "&$checked + $track": {
            backgroundColor: themes[props.theme].switch_active,
        },
    }),
    checked: (props) => ({}),
    track: (props) => ({}),
};
