export const styles = {
    "@media screen and (min-device-width: 768px)": {
        icon_tool: {
            position: "absolute",
            "@media screen and (min-device-width: 768px)": {
                width: '31.25em',
                top: window.screen.availHeight * 0.288,
                height: window.screen.availHeight * 0.18,
                left: window.screen.availWidth * 0.57,
            },
            "@media screen and (max-device-width: 767px)": {
                width: window.screen.availWidth - window.screen.availWidth * 0.01 * 6,
                height: window.screen.availHeight * 0.4 * 0.85,
                top: window.screen.availHeight * 0.6 + window.screen.availHeight * 0.4 * 0.125,
                left: window.screen.availWidth * 0.01 * 3,
            },
            backgroundColor: "#515151",
            borderRadius: "10px",
        },
        title: {
            position: "absolute",
            zIndex: "0",
            left: "2.5%",
            top: "3%",
            fontSize: "125%",
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            color: "#a9a9a9",
        },
        black_title: {
            "@media screen and (min-device-width: 768px)": {
                left: "51.75%",
            },
            "@media screen and (max-device-width: 767px)": {
                left: "73.5%",

            },
        },
        white_title: {
            "@media screen and (min-device-width: 768px)": {
                left: "2.5%",
            },
            "@media screen and (max-device-width: 767px)": {
                left: "14%",

            },
        },
        white_window: {
            "@media screen and (min-device-width: 768px)": {
                left: "29.5%",
            },
            "@media screen and (max-device-width: 767px)": {
                left: "2%",

            },
        },
        black_window: {
            "@media screen and (min-device-width: 768px)": {
                left: "78.75%",
            },
            "@media screen and (max-device-width: 767px)": {
                left: "60%",
            },
        },
    },
    "@media screen and (max-device-width: 767px)": {
        icon_tool: {
            position: "absolute",
            zIndex: "0",
            width: window.screen.availWidth - window.screen.availWidth * 0.01 * 6,
            height: window.screen.availHeight * 0.4 * 0.85,
            top: window.screen.availHeight * 0.4 * 0.85 + window.screen.availHeight * 0.4 * 0.125,
            left: window.screen.availWidth * 0.01 * 3,
            backgroundColor: "#515151",
            borderRadius: "10px",
        },
    },
};