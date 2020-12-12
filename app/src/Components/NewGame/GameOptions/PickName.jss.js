import makeStyles from "@material-ui/core/styles/makeStyles";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {getInputsWidth, gameOptionsMargin as margin} from "./variables.jss";
import {standardLeft} from "./PickType.jss";
import {navBarHeight} from "../../NavBar/NavBarStyle";
import {title} from "./mixins.jss";

export const text_field = (props) => ({
    position: 'absolute',
    width: getInputsWidth(props.fontSize),
    top: navBarHeight + margin * 0.2 + props.fontSize,
    left: standardLeft(props.fontSize),
    color: 'black',
})

export const useStyles = makeStyles({
    title: props =>  ({
        ...title(props.fontSize, props.text),
        top: navBarHeight * 1.6,
    }),
});
