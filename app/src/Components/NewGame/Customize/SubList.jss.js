import makeStyles from "@material-ui/core/styles/makeStyles";
import {availWidth} from "../../helpers/windowMeasurments";
import {themes} from "../../styles/themes.jss";

export const text = (fontSize) => ({
    fontSize: fontSize,
    height: '2.06em',
    paddingTop: '0.5em',
    paddingLeft: '0.5em',
});

export const useStyles = makeStyles({
    sub_list: props =>  ({
        width: availWidth() * 0.48,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }),
    header: props => ({
        fontSize: props.fontSize,
        textAlign: "center",
        width: '100%',
    }),
    piece_label_odd: props => ({
        ...text(props.fontSize),
        width: '19%',
        borderRight: `0.08em solid ${themes[props.theme].fill}`,
        backgroundColor: themes[props.theme].odd_row,
    }),
    piece_value_odd: props => ({
        ...text(props.fontSize),
        width: '79%',
        backgroundColor: themes[props.theme].odd_row,
    }),
    piece_label_even: props => ({
        width: '19%',
        ...text(props.fontSize),
        borderRight: `0.08em solid ${themes[props.theme].fill}`,
        backgroundColor: themes[props.theme].even_row,
    }),
    piece_value_even: props => ({
        ...text(props.fontSize),
        width: '79%',
        backgroundColor: themes[props.theme].even_row,
    }),
});