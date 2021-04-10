import {viewWidth} from "../../helpers/windowMeasurments";
import {themes} from "../../styles/themes.jss";

export const stroke_variants1 = (theme) => ({
    first: {
        pathLength: 0,
        zIndex: 'inherit',
        fill: 'none',
        width: viewWidth(),
        stroke: `rgba(${themes[theme].variant_stroke_r0}, ${themes[theme].variant_stroke_g0}, ${themes[theme].variant_stroke_b0}, 0)`,
        transition: {duration: 1.6},
    },
    second: {
        pathLength: 1,
        zIndex: 'inherit',
        fill: 'none',
        width: viewWidth(),
        stroke: `rgba(${themes[theme].variant_stroke_r1}, ${themes[theme].variant_stroke_g1}, ${themes[theme].variant_stroke_b1}, 1)`,
        transition: {duration: 1.6},
    },
});

export const fill_variants1 = (theme) => ({
    first: {
        pathLength: 0,
        zIndex: 'inherit',
        stroke: 'none',
        width: viewWidth(),
        fill: `rgba(${themes[theme].variant_fill_r0}, ${themes[theme].variant_fill_g0}, ${themes[theme].variant_fill_b0}, 0)`,
        transition: {duration: 0.8, delay: 0.8},
    },
    second: {
        pathLength: 1,
        zIndex: 'inherit',
        stroke: 'none',
        width: viewWidth(),
        fill: `rgba(${themes[theme].variant_fill_r1}, ${themes[theme].variant_fill_g1}, ${themes[theme].variant_fill_b1}, 1)`,
        transition: {duration: 0.8, delay: 0.8}
    },
});

export const stroke_variants2 = (theme) => ({
    first: {
        pathLength: 0,
        zIndex: 'inherit',
        fill: 'none',
        width: viewWidth(),
        stroke: `rgba(${themes[theme].variant_stroke_r1}, ${themes[theme].variant_stroke_g1}, ${themes[theme].variant_stroke_b1}, 1)`,
        transition: {duration: 1.6},
    },
    second: {
        pathLength: 1,
        zIndex: 'inherit',
        fill: 'none',
        width: viewWidth(),
        stroke: `rgba(${themes[theme].variant_stroke_r0}, ${themes[theme].variant_stroke_g0}, ${themes[theme].variant_stroke_b0}, 0)`,
        transition: {duration: 1.6},
    },
});

export const fill_variants2 = (theme) => ({
    first: {
        pathLength: 0,
        zIndex: 'inherit',
        stroke: 'none',
        width: viewWidth(),
        fill: `rgba(${themes[theme].variant_fill_r1}, ${themes[theme].variant_fill_g1}, ${themes[theme].variant_fill_b1}, 1)`,
        transition: {duration: 1},
    },
    second: {
        pathLength: 1,
        zIndex: 'inherit',
        stroke: 'none',
        width: viewWidth(),
        fill: `rgba(${themes[theme].variant_fill_r0}, ${themes[theme].variant_fill_g0}, ${themes[theme].variant_fill_b0}, 0)`,
        transition: {duration: 1},
    },
});