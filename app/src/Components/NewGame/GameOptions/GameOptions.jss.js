import {makeStyles} from "@material-ui/core/styles"
import {fullScreenImg} from "../../styles/fullScreenImg.jss";
import {dropdownDisp} from "./PlayAs.jss";
import {standardLeft} from "./PickType.jss";
import {getInputsWidth, gameOptionsMargin as margin} from "./variables.jss";

export const submit_button = (titlesFontSize) => ({
    position: 'absolute',
    top: dropdownDisp(titlesFontSize) + margin*1.1,
    left: standardLeft(titlesFontSize),
    width: getInputsWidth(titlesFontSize),
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
})

export const useStyles = makeStyles({

    background: {
        ...fullScreenImg,
        backgroundImage: 'url("/Images/Backgrounds/light-background.svg")'
    },
});