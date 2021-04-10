import {viewWidth} from "../../helpers/windowMeasurments";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";
import {adjustOverflow} from "./adjustOverflow";

export function getSqrSize() {
    const vw = viewWidth();
    let sqrSizeLg = vw * 0.051;
    let sqrSizeSm = ((vw - miniVariantIconsColumnWidth) * 0.11875);
    [sqrSizeLg, sqrSizeSm] = adjustOverflow(sqrSizeLg, sqrSizeSm)
    return {sqrSizeLg, sqrSizeSm}
}