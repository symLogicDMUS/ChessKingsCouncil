import { makeStyles } from "@material-ui/core/styles";

export const fontColor = {
    color: "#000",
};

export const useStyles = makeStyles(
    (theme) => ({
        login_page: (props) => ({
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: 1000,
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }),
        background: (props) => ({
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 999,
            backgroundColor: "#212121",
        }),
        content: (props) => ({
            "@media screen and (max-width: 600px)": {
                width: "90vw",
            },
            "@media screen and (min-width: 600px)": {
                width: "75vw",
            },
            margin: "auto",
        }),
        title: (props) => ({
            width: "100%",
            height: "auto",
            marginBottom: "1rem",
        }),
        buttons: (props) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }),
        close: (props) => ({
            fontSize: "1.2rem",
            color: "#fff",
            borderRadius: 0,
            "&:hover": {
                color: "#fff",
            },
            "& .MuiSvgIcon-root": {
                width: "2rem",
                height: "2rem",
            },
        }),
        top_button: (props) => ({
            cursor: "pointer",
            width: "7.5vw",
            height: "7.5vw",
            borderRadius: 0,
            position: "absolute",
            right: 0,
            top: 0,
        }),
        help_reminder: (props) => ({
            width: "85vw",
            left: "7.5vw",
            textAlign: "center",
            "& .MuiButton-root": {
                color: "#253b73",
                marginLeft: "0.5rem",
            },
            "& .MuiTypography-root": {
                color: "#253b73",
            },
        }),
        fill: (props) => ({
            backgroundColor: "#fff",
            borderRadius: "0.5rem",
            padding: "0.5rem",
        }),
    }),
    { index: 1 }
);
