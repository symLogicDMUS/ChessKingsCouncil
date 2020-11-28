import makeStyles from "@material-ui/core/styles/makeStyles";
import {
    promoListHeight,
    promoListLeft,
    promoListTop,
    promoListWidth,
} from "../sizeAndPosVariables.jss";

const listItem = {
    position: "absolute",
    zIndex: 5,
    width: "100%",
    height: "20%",
    textAlign: "center",
    fontFamily: 'Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    color: "#a9a9a9",
    border: "1px solid #707070",
    borderLeft: "none",
}


export const useStyles = makeStyles({
    promoList: {
        promoListWidth: promoListWidth,
        promoListHeight: promoListHeight,
        promoListTop: promoListTop,
        promoListLeft: promoListLeft,
    },
    header: props => ({
        ...listItem,
        fontSize: props.fontSize,
    }),
    label: props => ({
        ...listItem,
        fontSize: props.fontSize
    }),
});