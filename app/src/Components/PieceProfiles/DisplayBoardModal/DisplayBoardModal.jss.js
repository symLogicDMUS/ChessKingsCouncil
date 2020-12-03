import {makeStyles} from "@material-ui/core/styles";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";


export const useStyles = makeStyles({
    displayBoardModal: {
        width: availWidth() * 0.208,
        height: availHeight() * 0.504,
        left: availWidth() * 0.5 - availWidth() * 0.208 * 0.5,
        top: availHeight() * 0.5 - availHeight() * 0.504 * 0.5,
        position: "absolute",
        zIndex: 4,
        display: "grid",
        backgroundColor: "#515151",
        borderRadius: 20,
        gridTemplateColumns: 320,
        gridTemplateRows: "7.89% 84.21% 7.89%",
    },
    title: {
        position: 'absolute',
        zIndex: 4,
        left: 0,
        width: '90%',
        height: '7.5%',
        color: '#a9a9a9',
        fontSize: '180%',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif'",
        textAlign: 'center',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        borderTopLeftRadius: 15,
    },
    close: {
        position: "absolute",
        zIndex: "inherit",
        left: "90%",
        width: "10%",
        height: "7.5%",
        borderTopRightRadius: 15,
        cursor: "pointer",
    },
    closeIcon: {position: "absolute", width: "70%", height: "70%", marginTop: "15%"},
    bottom: {
        position: "absolute",
        zIndex: "inherit",
        gridColumn: 1,
        gridRow: 3,
        backgroundColor: "#515151",
        borderRadius: 15,
    },
})