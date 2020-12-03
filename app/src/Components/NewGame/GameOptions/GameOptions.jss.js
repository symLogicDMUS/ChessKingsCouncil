import {makeStyles} from "@material-ui/core/styles"
import {fontSizes} from "../../styles/fontSizes";
import {navBarHeight} from "../../NavBar/NavBarStyle";
import {getTextWidth} from "../../helpers/getTextWidth";
import {margin, gameOptionsWidth} from "./variables.jss";
import {availWidth} from "../../helpers/windowMeasurments";
import {fullScreenImg} from "../../Reuseables/style/fullScreenImg.jss";

export const useStyles = makeStyles({

    background: {
        ...fullScreenImg,
        backgroundImage: 'url("/Images/Backgrounds/light-background.svg")'
    },

    submit: {
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: fontSizes.medium1,
        background: 'black',
        color: 'white',
        '&:hover': {
            background: 'black',
            color: 'white',
        },
    },
});