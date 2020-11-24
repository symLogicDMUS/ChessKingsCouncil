export const styles = {
    options_tool: {
        position: "absolute",
        zIndex: "0",
        top: "85%",
        left: "57%",
        height: "14.4%",
        width: "26%",
        borderRadius: "10px",
        backgroundColor: "#515151",
    },
    "@media screen and (min-device-width: 768px)": {
        __expression__: "screen and (min-device-width: 768px)",
        options_title: {
            position: "absolute",
            zIndex: "0",
            left: "2.5%",
            top: "5%",
            fontSize: "125%",
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            color: "#a9a9a9",
        },
    },
    "@media screen and (max-device-width: 767px)": {
        __expression__: "screen and (max-device-width: 767px)",
        options_title: {
            display: "none",
        },
    },
};
