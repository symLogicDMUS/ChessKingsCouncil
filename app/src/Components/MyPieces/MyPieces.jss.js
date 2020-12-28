import {themes} from "../styles/themes.jss";
import {availHeight, availWidth} from "../helpers/windowMeasurments";

export const styles = {
    my_pieces: props => ({
        width: availWidth(),
        height: availHeight() * 0.8,
        '@media screen and (min-width: 768px)': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        '@media screen and (max-width: 767px)': {
            width: '100%',
            height: '100%',
        },
    }),
};
