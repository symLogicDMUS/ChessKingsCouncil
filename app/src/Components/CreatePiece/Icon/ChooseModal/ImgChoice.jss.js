import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    normal: {
        zIndex: "2",
        width: "100%",
        backgroundColor: "#515151",
        border: "1px solid #3c3f41",
        borderRadius: "5px",
        textAlign: "center",
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        cursor: "pointer",
    },
    selected: {
        zIndex: "2",
        width: "100%",
        backgroundColor: "#515151",
        border: "1px solid #3c3f41",
        borderRadius: "5px",
        textAlign: "center",
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        cursor: "pointer",
        WebkitBoxShadow: "0px 0px 16px white",
        boxShadow: "0px 0px 16px white",
        color: "white",
    },
    img_choice: {
        position: "relative",
        width: "95%",
        maxHeight: "95%",
        margin: "2.5%",
    },
    piece_name: {
        position: "relative",
        top: "-8%",
        width: "100%",
        height: "7.5%",
        color: "#72e2ff",
        textAlign: "center",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
});
