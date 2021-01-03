import {availWidth} from "../../../helpers/windowMeasurments";
import {themes} from "../../themes.jss";

export const stroke_variants = (theme) => ({
    first: {
        pathLength: 0,
        zIndex: 'inherit',
        fill: 'none',
        width: availWidth(),
        stroke: `rgba(${themes[theme].variant_stroke_r0}, ${themes[theme].variant_stroke_g0}, ${themes[theme].variant_stroke_b0}, 0)`,
        transition: {duration: 1.5},
    },
    second: {
        pathLength: 1,
        zIndex: 'inherit',
        fill: 'none',
        width: availWidth(),
        stroke: `rgba(${themes[theme].variant_stroke_r1}, ${themes[theme].variant_stroke_g1}, ${themes[theme].variant_stroke_b1}, 1)`,
        transition: {duration: 1.5},
    },
    third: {
        pathLength: 1,
        zIndex: 'inherit',
        fill: 'none',
        width: availWidth(),
        stroke: `rgba(${themes[theme].variant_stroke_r2}, ${themes[theme].variant_stroke_g2}, ${themes[theme].variant_stroke_b2}, 1)`,
        transition: {duration: 1.5, delay: 5},
    },
});

export const fill_variants = (theme) => ({
    first: {
        pathLength: 0,
        zIndex: 'inherit',
        stroke: 'none',
        width: availWidth(),
        fill: `rgba(${themes[theme].variant_fill_r0}, ${themes[theme].variant_fill_g0}, ${themes[theme].variant_fill_b0}, 0)`,
        transition: {duration: 1.5, delay: 0.8},
    },
    second: {
        pathLength: 1,
        zIndex: 'inherit',
        stroke: 'none',
        width: availWidth(),
        fill: `rgba(${themes[theme].variant_fill_r1}, ${themes[theme].variant_fill_g1}, ${themes[theme].variant_fill_b1}, 1)`,
        transition: {duration: 1.5, delay: 0.8},
    },
    third: {
        pathLength: 1,
        zIndex: 'inherit',
        stroke: 'none',
        width: availWidth(),
        fill: `rgba(${themes[theme].variant_fill_r2}, ${themes[theme].variant_fill_g2}, ${themes[theme].variant_fill_b2}, 1)`,
        transition: {duration: 1.5, delay: 5},
    },
});