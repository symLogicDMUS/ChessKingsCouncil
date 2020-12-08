import {makeStyles} from "@material-ui/core/styles";
import {locationToolWidth} from "./Location.jss";

export const locationButtonSize = () => locationToolWidth() * 0.15;

const location_button = {
    width: locationButtonSize(),
    height: locationButtonSize(),
    minWidth: 0,
    minHeight: 0,
}

export const useStyles = makeStyles({
    normal: props => ({
        ...location_button,
        background: '#707070',
    }),
    selected: props =>  ({
        ...location_button,
        background: 'red',
    }),
})