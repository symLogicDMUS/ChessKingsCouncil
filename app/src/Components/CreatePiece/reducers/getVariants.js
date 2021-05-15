import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export function getVariants(y) {
    return {
        initial: {
            scale: 0,
            left: 'calc(50vw + 12px)',
            top: y,
        },
        animate: {
            scale: 1,
            left: 0,
            top: 48,
        },
        exit: {
            scale: 0,
            left: 'calc(50vw + 12px)',
            top: y,
        },
    };
}