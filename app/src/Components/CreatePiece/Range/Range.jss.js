import makeStyles from "@material-ui/core/styles/makeStyles";
import {toolWidth} from "../CreatePiece.jss";
import {drawerWidth} from "../../Reuseables/PermanentDrawerLeft.jss";

export const useStyles = makeStyles({
    range_tool: {
        // position: 'absolute',
        // "@media screen and (min-device-width: 768px)": {
        width: drawerWidth,
        height: '11.75em',
        // top: '31.2em',
        // left: window.screen.availWidth * 0.57,
        // },
        // "@media screen and (max-device-width: 767px)": {
        //     width: window.screen.availWidth - window.screen.availWidth * 0.03 * 2.2,
        //     height: window.screen.availHeight * 0.4 * 0.85 - window.screen.availWidth * 0.03,
        //     top: window.screen.availHeight * 0.6 + window.screen.availWidth * 0.03 * 3,
        //     left: window.screen.availWidth * 0.03,
        // },
        // zIndex: '0',
        backgroundColor: 'blue',
        borderRadius: '15px',
        borderColor: '#a9a9a9'
    },
    title: {
        // position: 'absolute',
        zIndex: '0',
        left: '2.5%',
        top: '2.5%',
        fontSize: '150%',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        color: '#a9a9a9'
    },
});