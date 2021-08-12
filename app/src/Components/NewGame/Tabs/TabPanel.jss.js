import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
    {
        tabPanel: (props) => ({
            zIndex: 0,
            margin: 'auto',
        }),
    },
    { index: 1 }
);
