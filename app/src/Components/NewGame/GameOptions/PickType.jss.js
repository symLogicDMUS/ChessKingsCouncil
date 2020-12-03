import makeStyles from "@material-ui/core/styles/makeStyles";
import {getTextWidth} from "../../helpers/getTextWidth";
import {navBarHeight} from "../../NavBar/NavBarStyle";
import {availWidth} from "../../helpers/windowMeasurments";
import {gameType, title} from "./mixins.jss";
import {margin} from "./variables.jss";

export const size = (fontSize) => fontSize*0.8;
export const buttonMargin = (fontSize) => (getTextWidth('Pick Type', fontSize, 'Garamond') - size(fontSize)*3)*0.1;
export const standardLeft = (fontSize) => availWidth()*0.5 - getTextWidth('Pick Type', fontSize, 'Garamond')*0.35;
const customLeft = (fontSize) => standardLeft(fontSize) + size(fontSize) + buttonMargin(fontSize)
const councilLeft = (fontSize) => customLeft(fontSize) + size(fontSize) + buttonMargin(fontSize)


export const useStyles = makeStyles({
    title: props =>  ({
        ...title(props.fontSize, props.text),
        top: navBarHeight + margin + props.fontSize +  margin
    }),

    standard: props => ({
        ...gameType(props.fontSize),
        left: standardLeft(props.fontSize),
    }),
    custom: props => ({
        ...gameType(props.fontSize),
        left: customLeft(props.fontSize),
    }),
    council: props => ({
        ...gameType(props.fontSize),
        left: councilLeft(props.fontSize),
    }),
});
