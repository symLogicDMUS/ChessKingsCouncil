import { themes } from "../../styles/themes/themes.jss";
import { fade, lighten } from "@material-ui/core/styles";

export const styles = {
    paper: (props) => ({
        border: `0.08rem solid ${lighten(themes[props.theme].odd_row, 0.08)}`,
        backgroundColor: lighten(themes[props.theme].fill, 0.08),
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
        "& .MuiList-root": {
            paddingTop: 0,
        },
        "& .MuiList-padding": {
            paddingTop: 0,
        },
        "& .MuiListItem-gutters": {
            paddingLeft: 0,
        },
    }),
};
