import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSize} from "../../styles/fontSize.jss";

const square = (fontSize) => ({
    fontSize: fontSize,
    cursor: "pointer",
    width: '5em',
    height: '5em',
    '&:hover': {
        backgroundColor: "#00CCFF",
    },
})

export const useStyles = makeStyles({
    dark_sqr: props => ({
        ...square(props.fontSize),
        backgroundColor: "#a9a9a9",
    }),
    light_sqr: props => ({
        ...square(props.fontSize),
        backgroundColor: "#ffffff",
    }),
    offset_element: props => ({
        ...square(props.fontSize),
        backgroundColor: "#8b0000",
    }),
    span_element: props => ({
        ...square(props.fontSize),
        backgroundColor: "#ec2525",
    }),
});