import makeStyles from "@material-ui/core/styles/makeStyles";
import {rfToXy} from "../../helpers/crdCnvrt";


function getPosPx(rf, screenCase) {
    if (screenCase === 'desktop') {
        const sqrHeightRatio = window.screen.availHeight * 0.053;
        const sqrWidthRatio = window.screen.availWidth * 0.026;
        const boardSize = sqrHeightRatio * 8;
        const [x, y] = rfToXy(rf);
        const left = (x - 1) * sqrWidthRatio;
        const top = boardSize - y * sqrHeightRatio;
        return {left: left, top: top};
    }
    else if (screenCase === 'mobile') {
        /*Not yet implemented*/
    }
}

const square = (rf) => ({
    position: 'absolute',
    zIndex: 'inherit',
    "@media screen and (min-device-width: 768px)": {
        ...getPosPx(rf, 'desktop')
    },
    "@media screen and (max-device-width: 767px)": {
        ...getPosPx(rf, 'mobile')
    },
})

export const useStyles = makeStyles({
    light: props => ({
        ...square(props.rf),
        backgroundColor: '#a9a9a9',
    }),
    dark: props => ({
        ...square(props.rf),
        backgroundColor: '#ffffff',
    }),
    offset: props => ({
        ...square(props.rf),
        backgroundColor: '#8b0000',
    }),
    span: props => ({
        ...square(props.rf),
        backgroundColor: '#EC2525',
    }),
})