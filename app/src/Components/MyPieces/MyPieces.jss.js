export const styles = {
    my_pieces: {
        position: "absolute",
        "@media screen and (min-device-width: 768px)": {
            height: window.screen.availHeight * 0.9 * 0.075,
            width: window.screen.availWidth * 0.99 * 0.1,
            left: window.screen.availWidth * 0.99 * 0.008,
        },
        "@media screen and (max-device-width: 767px)": {
            fontSize: window.screen.availHeight * 0.9 * 0.075 * 0.9,
            marginTop: window.screen.availHeight * 0.9 * 0.075 * 0.05,
            border: "1px dashed green",
        },
        zIndex: "5",
        border: "0.25em solid #707070",
        borderRadius: "0.85em",
    },
    topbar: {
        position: "absolute",
        zIndex: "inherit",
        backgroundColor: "#515151",
        borderBottom: "0.1em solid #707070",
        borderTopLeftRadius: "0.85em",
        borderTopRightRadius: "0.85em",
        "$&title":{
            position: "absolute",
            color: "#a9a9a9",
            border: "0.1em dashed #b1faae",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textAlign: "left",
            paddingLeft: "1%",
            paddingTop: "0.25%",
        },
    },
    title:{}
};
