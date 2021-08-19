import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
    {
        tabPanel: (props) => ({
            zIndex: 0,
            margin: "auto",
            "@media screen and (max-height: 500px)": {
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "2rem",
            },
        }),
    },
    { index: 1 }
);
