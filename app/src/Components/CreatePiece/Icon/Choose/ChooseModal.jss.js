import {modal} from "../../../helpers/modal.jss";

export const styles = {
    modal: {
        ...modal,
    },
    window: {
        position: "absolute",
        zIndex: "inherit",
        backgroundColor: "#515151",
        border: "1px solid #a9a9a9",
        borderRadius: "10px",
    },
    top_bar: {
        position: "absolute",
        '$&title': {
            position: "absolute",
            width: "100%"
        }
    },
    title: {},
    close: {
        position: "absolute",
        zIndex: "inherit",
        cursor: "pointer",
        '&:hover': {
            zIndex: "inherit",
            backgroundColor: "red",
        },
    },
    image_choices: {
        position: "absolute",
        zIndex: "inherit",
        border: "1px solid #a9a9a9",
        backgroundColor: "#515151",
        borderRadius: "3px",
        overflowY: "scroll",
    },
    bottom_bar: {
        position: "absolute",
    },
};
