export const styles = {
    options_tool: {
        position: "absolute",
        zIndex: "0",
        "@media screen and (min-device-width: 768px)": {
            width: '31.25em',
            height: window.screen.availHeight * 0.13,
            top: window.screen.availHeight * 0.785,
            left: window.screen.availWidth * 0.57,
        },
        "@media screen and (max-device-width: 767px)": {
            width: window.screen.availWidth * 0.934,
            height: window.screen.availHeight * 0.4 * 0.825,
            top: window.screen.availHeight * 0.6 + window.screen.availWidth * 0.03 * 3,
            left: window.screen.availWidth * 0.03
        },
        borderRadius: "10px",
        backgroundColor: "#515151",
    },
    "@media screen and (min-device-width: 768px)": {
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
        options_title: {
            display: "none",
        },
    },
};