import { makeStyles } from "@material-ui/core/styles";

const promoChoice = {
    "@media screen and (min-device-width: 768px)": {
        width: window.screen.availHeight * 0.099,
        height: window.screen.availHeight * 0.099,
    },
};

export const useStyles = makeStyles({
    promo_choice: {
        ...promoChoice,
    },
    promo_choice_selected: {
        ...promoChoice,
        backgroundColor: "#00CCFF",
    },
});
