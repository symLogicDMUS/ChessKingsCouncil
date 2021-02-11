import {themes} from "../styles/themes.jss";
import {availHeight, availWidth} from "../helpers/windowMeasurments";

export const styles = {
    my_pieces: props => ({
        width: availWidth(),
        height: availHeight() * 0.8,
        overflowX: 'hidden',
        '@media (min-aspect-ratio: 16/9)': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        '@media (max-aspect-ratio: 1/1)': {
            width: '100%',
            height: '100%',
        },
    }),
};
