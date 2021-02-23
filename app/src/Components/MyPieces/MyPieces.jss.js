import {availHeight, viewHeight} from "../helpers/windowMeasurments";
import {appBarHeight} from "../Reuseables/PersistentDrawer.jss";

// mobile
export const piece_profiles = () => ({
    height: (viewHeight() - appBarHeight)*0.98,
});

export const styles = {
    my_pieces: props => ({
        width: '100vw',
        height: availHeight() * 0.8,
        overflowX: 'hidden',
        '@media screen and (min-device-width: 1040px)': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        '@media screen and (max-device-width: 1040px)': {
            height: availHeight() - appBarHeight,
        },
    }),
};
