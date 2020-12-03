import makeStyles from "@material-ui/core/styles/makeStyles";
import {buttonMargin, size, standardLeft} from "./PickType.jss";
import {navBarHeight} from "../../NavBar/NavBarStyle";
import {getInputsWidth, gameOptionsMargin as margin, sectionWidth} from "./variables.jss";
import {title} from "./mixins.jss"
import {fontSizes} from "../../styles/fontSizes";

export const titleDisp = (fontSize) => navBarHeight + margin * 4.5 + fontSize * 2;
export const dropdownDisp = (fontSize) => titleDisp(fontSize) + fontSize

export const dropdown = (fontSize) => ({
    position: 'absolute',
    width: getInputsWidth(fontSize),
    top: dropdownDisp(fontSize),
    left: standardLeft(fontSize),
})

export const useStyles = makeStyles({
    title: props => ({
        ...title(props.fontSize, props.text),
        top: titleDisp(props.fontSize),
    }),
});
