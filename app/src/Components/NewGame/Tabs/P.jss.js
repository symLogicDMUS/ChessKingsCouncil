import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
    {
        open_parenthesis: (props) => ({
            marginLeft: "0.35rem",
        }),
        hide: (props) => ({
            display: "none",
        }),
    },
    { index: 1 }
);
