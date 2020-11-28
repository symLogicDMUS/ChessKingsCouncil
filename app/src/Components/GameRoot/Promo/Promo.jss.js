import {modal} from "../../helpers/modal.jss";


export const styles = {
    promo_modal: {
        ...modal
    },
    img_group: {
        display: "block",
        zIndex: "inherit",
        "@media screen and (min-device-width: 768px)": {
            width: window.screen.availWidth * 0.244,
            height: window.screen.availHeight * 0.099,
            left: window.screen.availWidth * 0.377,
            top: window.screen.availHeight * 0.451,
        },
        cursor: "pointer",
        float: "left",
        backgroundColor: "white",
        border: "0.08em solid slateblue",
        borderBottom: "none",
        borderRadius: "1em",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        position: "absolute",
        '&:hover': {
            backgroundColor: "slateblue",
        },
    },
};