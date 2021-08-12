import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(
    {
        board: (props) => ({
            display: "grid",
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "0 0 0.15rem white",
        }),
    },
    { index: 1 }
);
