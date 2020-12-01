import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    header: {
        position: "relative",
        zIndex: "inherit",
        display: "grid",
        width: "100%",
        backgroundColor: "#515151",
        "$&piece_name": {
            MsGridRow: "1",
            gridRow: "1",
            MsGridColumn: "1",
            gridColumn: "1",
            color: "#a9a9a9",
            fontSize: "160%",
            paddingTop: "0.01%",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textAlign: "left",
            paddingLeft: "1%",
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
    },
    piece_name: {},
});
