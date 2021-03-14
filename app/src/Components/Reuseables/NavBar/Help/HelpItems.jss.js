import { makeStyles } from "@material-ui/core/styles";
import {modal} from "../../../helpers/modal.jss";
import {fontSize002, fontSizeW0045} from "../../../styles/fontSizes.jss";

export const fontSizes = {
    desktop: fontSize002,
    mobile: fontSizeW0045,
};

export const useStyles = makeStyles({
    help_items: props => ({
       ...modal,
       zIndex: 11,
    }),
}, {index: 1});