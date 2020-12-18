import {makeStyles} from "@material-ui/core/styles"
import {fullScreenImg} from "../../styles/fullScreenImg.jss";
import {availWidth} from "../../helpers/windowMeasurments";

export const submit_button = (fontSize) => ({
    fontSize: fontSize,
    color: 'black'
})

export const useStyles = makeStyles({
    game_options: props => ({
        fontSize: props.fontSize,
        width: availWidth(),
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'right',
    }),
});