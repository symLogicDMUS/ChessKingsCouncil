import {viewWidth} from "../../helpers/windowMeasurments";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export function getIconWindowHeight() {
    const vw = viewWidth();
    const widthB = vw  - miniVariantIconsColumnWidth;
    const size = widthB * 0.42;
    const doubleSize = size*2;
    const space = widthB - doubleSize;
    const margin = space / 3;
    return size + margin * 2;
}