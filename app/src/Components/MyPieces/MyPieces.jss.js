import {themes} from "../styles/themes.jss";
import {availHeight, availWidth} from "../helpers/windowMeasurments";

export const styles = {
    my_pieces: props => ({
        width: availWidth(),
        height: availHeight()*0.8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }),
};
