import {boardSize, gameBoardLeft} from "../../Reuseables/Board.jss";
import {navBarHeight} from "../../NavBar/NavBarStyle";


export const styles = {
    name_label: {
        position: "absolute",
        zIndex: "0",
        border: "1px dashed black",
        "@media screen and (min-device-width: 768px)": {
            left: gameBoardLeft(),
            top: navBarHeight*1.5,
            width: boardSize('desktop', 'large'),
            //height: "28px",
        },
        "@media screen and (max-device-width: 767px)": {

        },
        color: "#72e2ff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: "180%",
        textAlign: "center",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
};
