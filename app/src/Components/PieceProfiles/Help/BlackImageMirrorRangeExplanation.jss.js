import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    examples: props => ({
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "space-around",
    }),
}, {index: 1});