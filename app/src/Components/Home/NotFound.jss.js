import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
    {
        body: (props) => ({
            width: "99.5vw",
            height: "99.5vh",
            padding: "7.5vw",
        }),
        content: (props) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "85vw",
            height: `calc(100vh - 15vw)`,
        }),
        icon: (props) => ({
            "@media screen and (max-width: 960px)": {
                width: "40vw",
                height: "40vw",
            },
            "@media screen and (min-width: 960px)": {
                width: "16vw",
                height: "16vw",
            },
        }),
    },
    { index: 1 }
);
