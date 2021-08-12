import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
    {
        item: (props) => ({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }),
        title: (props) => ({
            width: "50vw",
            marginBottom: 26,
        }),
        content: props => ({
            position: 'fixed',
            width: "100vw",
            height: '100vh',
            display: "flex",
            flexDirection: "column",
        }),
    },
    { index: 1 }
);
