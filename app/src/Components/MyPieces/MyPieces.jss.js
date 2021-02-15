import {themes} from "../styles/themes.jss";
import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {addressBarHeight, appBarHeight} from "../Reuseables/PersistentDrawer.jss";

// mobile
export const piece_profiles = () => ({
    height: availHeight() - addressBarHeight,
});

export const styles = {
    my_pieces: props => ({
        width: '100vw',
        height: availHeight() * 0.8,
        overflowX: 'hidden',
        '@media (min-aspect-ratio: 1001/1000)': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        '@media (max-aspect-ratio: 1/1)': {
            height: availHeight() - appBarHeight,
        },
    }),
};
