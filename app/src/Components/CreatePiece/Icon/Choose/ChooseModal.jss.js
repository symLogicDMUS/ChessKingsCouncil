export const styles = {
    choose_modal: {
        position: "fixed",
        zIndex: "10",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "#0000004d",
    },
    choose_modal__choose_main: {
        position: "absolute",
        zIndex: "inherit",
        backgroundColor: "#515151",
        border: "1px solid #a9a9a9",
        borderRadius: "10px",
    },
    display_block: {
        display: "initial",
    },
    display_none: {
        display: "none",
    },
    choose_main__title_container: {
        position: "absolute",
    },
    choose_main__close: {
        position: "absolute",
        zIndex: "inherit",
        cursor: "pointer",
    },
    choose_main__close_hover: {
        zIndex: "inherit",
        backgroundColor: "red",
    },
    choose_main__image_choices: {
        position: "absolute",
        zIndex: "inherit",
        border: "1px solid #a9a9a9",
        backgroundColor: "#515151",
        borderRadius: "3px",
        overflowY: "scroll",
    },
    choose_main__bottom_bar: {
        position: "absolute",
    },
    "@media screen and (min-device-width: 768px)": {
        __expression__: "screen and (min-device-width: 768px)",
        choose_main__selected_image_name: {
            position: "absolute",
            color: "#72e2ff",
            width: "57.5%",
            height: "100%",
            left: "42.5%",
            fontSize: "180%",
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            textAlign: "left",
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
        choose_main__hover_image_name: {
            position: "absolute",
            color: "#a9a9a9",
            width: "20.5%",
            height: "100%",
            left: "20%",
            fontSize: "110%",
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            textAlign: "left",
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
    },
    "@media screen and (max-device-width: 767px)": {
        __expression__: "screen and (max-device-width: 767px)",
        choose_main__hover_image_name: {
            display: "none",
        },
    },
};
