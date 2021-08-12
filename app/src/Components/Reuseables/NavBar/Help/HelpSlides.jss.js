import { makeStyles } from "@material-ui/core/styles";
import { modal } from "../../../helpers/modal.jss";

export const fontSizes = {
    wide: "2vh",
    thin: "4.5vw",
};

export const useStyles = makeStyles(
    {
        help_items: (props) => ({
            ...modal,
            zIndex: 11,
        }),
    },
    { index: 1 }
);
