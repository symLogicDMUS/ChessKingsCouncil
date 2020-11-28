import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    range_help_extra_modal: {
        position: "absolute",
        zIndex: "6",
        width: "768px",
        height: "325px",
        left: "400px",
        top: "504px",
    },
    rthem_h: {
        fill: "none",
    },
    rthem_a: {
        stroke: "rgba(0, 0, 0, 0)",
    },
    rthem_b: {
        fill: "#515151",
        stroke: "#707070",
        strokeWidth: "5px",
    },
    rthem_c: {
        fill: "url(#rthem-a)",
    },
    rthem_d: {
        WebkitClipPath: "url(#rthem-b)",
        clipPath: "url(#rthem-b)",
    },
    rthem_e: {
        fill: "#a9a9a9",
        fontSize: "18px",
        fontFamily: "SegoeUI, Segoe UI",
    },
    rthem_f: {
        WebkitClipPath: "url(#rthem-c)",
        clipPath: "url(#rthem-c)",
    },
    rthem_g: {
        stroke: "none",
    },
});
