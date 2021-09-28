import { themes } from "../../../styles/themes/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { lighten } from "@material-ui/core/styles";

const arrowSizeSm = "100%";

export const transition = {
    type: "spring",
    stiffness: 200,
};
export const variants = {
    start: {
        scale: 0,
    },
    end: {
        scale: 1,
    },
};

export const useStyles = makeStyles(
    {
        mid: (props) => ({
            width: "3.2125vw",
            height: "3.2125vw",
        }),
        hover: (props) => ({
            "&:hover": {
                backgroundColor: themes[props.theme].offset,
            },
        }),
        arrow_button_normal: (props) => ({
            backgroundColor: themes[props.theme].fill,
            "&:hover": {
                backgroundColor: lighten(themes[props.theme].fill, 0.1),
            },
        }),
        arrow_button_selected: (props) => ({
            backgroundColor: themes[props.theme].span,
            "&:hover": {
                backgroundColor: lighten(themes[props.theme].span, 0.1),
            },
        }),
        arrow_button_adjust: (props) => ({
            zIndex: 2,
        }),

        /*sm*/

        arrow_button_sm: (props) => ({
            borderRadius: 0,
            "& .MuiTouchRipple-root": {
                color: themes[props.theme].sqr_text,
            },
            "@media screen and (max-width: 426px)": {
                padding: "0.25em",
            },
        }),
        vector_sm: (props) => ({
            width: arrowSizeSm,
            height: arrowSizeSm,
        }),
        vector_active_sm: (props) => ({
            color: themes[props.theme].button_text,
        }),

        vector_inactive_sm: (props) => ({
            color: themes[props.theme].arrow_inactive,
        }),

        /*lg*/
        arrow_button_lg: (props) => ({
            width: "3.2125vw",
            height: "3.2125vw",
            borderRadius: "0.25rem",
            border: `0.005rem solid ${themes[props.theme].outline}`,
            "& .MuiTouchRipple-root": {
                color: themes[props.theme].span,
            },
        }),
        vector_lg: (props) => ({
            width: "2.15vw",
            height: "2.15vw",
        }),
        vector_active_lg: (props) => ({
            color: themes[props.theme].button_text,
        }),
        vector_inactive_lg: (props) => ({
            color: themes[props.theme].text,
        }),
    },
    { index: 1 }
);
