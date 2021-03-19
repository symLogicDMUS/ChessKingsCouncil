import {availHeight, viewHeight} from "../helpers/windowMeasurments";
import {appBarHeight} from "../Reuseables/Drawers/PersistentDrawer.jss";

// mobile
export const piece_profiles = () => ({
    height: (viewHeight() - appBarHeight)*0.98,
});

export const styles = {
    my_pieces: props => ({
        overflowX: 'hidden',
        '@media screen and (max-width: 1040px)': {
            height: availHeight() - appBarHeight,
            width: '100vw',
        },
        '@media screen and (min-width: 1040px)': {
            height: viewHeight() * 0.95,
            width: '98.75vw',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
    }),
};
