import { makeStyles } from "@material-ui/core/styles";

export const marginLeft = {
    marginLeft: "auto",
};

export const useStyles = makeStyles(
    {
        appBar: (props) => ({
            width: "100%",
            display: "flex",
            alignItems: "center",
        }),
    },
    { index: 1 }
);
