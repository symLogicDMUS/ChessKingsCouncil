import { viewHeight } from "../../helpers/windowMeasurments";
import { appBarHeight } from "../../Reuseables/Drawers/ResponsiveDrawer.jss";

export const adjustOverflow = (sqrSizeLg, sqrSizeSm) => {
    if (sqrSizeLg * 8 > viewHeight() - appBarHeight * 1.1) {
        sqrSizeLg = (viewHeight() - appBarHeight) * 0.12;
    }
    if (sqrSizeSm * 8 > viewHeight() - appBarHeight * 1.1) {
        sqrSizeSm = (viewHeight() - appBarHeight * 1.1) * 0.12;
    }
    return [sqrSizeLg, sqrSizeSm];
};
