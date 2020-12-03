import makeStyles from "@material-ui/core/styles/makeStyles";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {margin, sectionWidth} from "./variables.jss";
import {navBarHeight} from "../../NavBar/NavBarStyle";
import {buttonMargin, size, standardLeft} from "./PickType.jss";
import {title} from "./mixins.jss"

const playerType = {
    position: "absolute",
    color: 'black',
    left: sectionWidth + margin,
    width: availWidth() * 0.163,
    height: availHeight() * 0.146,
}

export const text = {
    color: 'black'
}

export const dropdown = (fontSize) => ({
    position: 'absolute',
    width: size(fontSize) * 3 + buttonMargin(fontSize) * 2,
    top: navBarHeight + margin * 0.2 + fontSize,
    left: standardLeft(fontSize),
})

export const useStyles = makeStyles({
    title: props => ({
        ...title(props.fontSize, props.text),
        top: navBarHeight + margin * 4.5 + props.fontSize * 2,
    }),
    // test: {
    //     ...playerType,
    //     top: '1em',
    // },
    // white: {
    //     ...playerType,
    //     top: '2em',
    // },
    // black: {
    //     ...playerType,
    //     top: '3em',
    // },
    // radio_button: props => ({
    //     fontSize: props.fontSize,
    //     width: '1em',
    //     height: '1em',
    //     color: 'black'
    // }),
    // label: props => ({
    //     fontSize: props.fontSize * 0.7,
    //     fontFamily: "Garamond",
    // }),
    // ripple: {
    //     color: 'black'
    // },
});
