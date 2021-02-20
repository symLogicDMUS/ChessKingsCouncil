import {availHeight, innerHeight} from "../helpers/windowMeasurments";
import {appBarHeight} from "../Reuseables/PersistentDrawer.jss";

// mobile
export const piece_profiles = () => ({
    height: (innerHeight() - appBarHeight)*0.98,
});

export const styles = {
    my_pieces: props => ({
        width: '100vw',
        height: availHeight() * 0.8,
        overflowX: 'hidden',
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
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
