import {viewWidth} from "../../helpers/windowMeasurments";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export function getSqrSize() {
    const vw = viewWidth();
    const sqrSizeLg = vw * 0.051;
    const sqrSizeSm = ((vw - miniVariantIconsColumnWidth) * 0.11875);
    return {sqrSizeLg, sqrSizeSm}
}