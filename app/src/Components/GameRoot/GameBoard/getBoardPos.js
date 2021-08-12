import { viewWidth } from "../../helpers/windowMeasurments";
import { getSqrSize } from "./getSqrSize";
import { appBarHeight } from "../../Reuseables/Drawers/ResponsiveDrawer.jss";
import { miniVariantIconsColumnWidth } from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export function getBoardPos() {
    const vw = viewWidth();
    const { sqrSizeLg, sqrSizeSm } = getSqrSize();
    return {
        wide: {
            left: vw * 0.465 - sqrSizeLg * 8 * 0.5,
            top: appBarHeight + 24,
        },
        thin: {
            left:
                (vw - miniVariantIconsColumnWidth) * 0.5 - sqrSizeSm * 8 * 0.5,
            top: appBarHeight + 12,
        },
    };
}
