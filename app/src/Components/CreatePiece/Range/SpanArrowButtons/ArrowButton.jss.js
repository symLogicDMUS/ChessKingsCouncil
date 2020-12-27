import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../../styles/themes.jss";
const buttonPos = {
    "135d": {gridRow: 1, gridColumn: 1 },
    "90d": {gridRow: 1, gridColumn: 2 },
    "45d": {gridRow: 1, gridColumn: 3 },
    "180d": {gridRow: 2, gridColumn: 1 },
    "0d": {gridRow: 2, gridColumn: 3 },
    "225d": {gridRow: 3, gridColumn: 1 },
    "270d": {gridRow: 3, gridColumn: 2 },
    "315d": {gridRow: 3, gridColumn: 3 },
};

const container = (angle, fontSize) => ({
    ...buttonPos[angle],
    fontSize: fontSize,
    width: '3em',
    height: '3em',
    border: '1px solid #2b2b2b',
    borderRadius: '0.2em',
})

export const useStyles = makeStyles({
    container_normal: props => ({
        ...container(props.angle, props.fontSize),
        backgroundColor: '#414141',
        '&:hover': {
            backgroundColor: '#707070'
        },
    }),
    container_selected: props => ({
        ...container(props.angle, props.fontSize),
        backgroundColor: '#ec2525',
        '&:hover': {
            backgroundColor: '#ec2525'
        },
    }),
    arrow_button: props => ({
        width: '100%',
        height: '100%',
    }),

    vector: (props) =>  ({
        width: '150%',
        height: '150%',
        color: themes[props.theme].text,
    }),
});
