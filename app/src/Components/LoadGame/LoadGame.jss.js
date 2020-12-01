const getLeft = (buttonType, screenCase) => {
    if (buttonType === 'play') {
        switch (screenCase) {
            case 'desktop':
                return window.screen.availWidth * 0.5
            case 'mobile':
                return window.screen.availWidth * 0.25
            default:
                break;
        }
    } else if (buttonType === 'delete') {
        switch (screenCase) {
            case 'desktop':
                return window.screen.availWidth * 0.6
            case 'mobile':
                return window.screen.availWidth * 0.30
            default:
                break;

        }
    }
    return null;
}

const button = (buttonType) => ({
    objectAlign: "center",
    border: "1px solid white",
    padding: "5px 15px",
    margin: "5px",
    fontFamily: "Georgia",
    color: "white",
    "@media screen and (min-device-width: 768px)": {
        width: window.screen.availWidth * 0.4,
        height: window.screen.availHeight * 0.125,
        top: window.screen.availHeight * 0.5,
        left: getLeft(buttonType, 'desktop')
    },
    "@media screen and (max-device-width: 767px)": {
        width: window.screen.availWidth * 0.25,
        height: window.screen.availHeight * 0.12,
        top: window.screen.availHeight * 0.1,
        left: getLeft(buttonType, 'mobile')
    },
})

const button_enabled = (buttonType) => ({
    ...button(buttonType),
    backgroundColor: "black",
    cursor: "pointer",
})

const button_disabled = (buttonType) => ({
    ...button(buttonType),
    backgroundColor: "grey",
    cursor: "not-allowed",
})

export const styles = {
    title: {
        margin: "0",
        position: "absolute",
        cursor: "pointer",
        MsTransform: "translate(-50%, -50%)",
        transform: "translate(-50%, -50%)",
        "@media screen and (min-device-width: 768px)": {
            width: window.screen.availWidth * 0.4,
            height: window.screen.availHeight * 0.3,
            top: window.screen.availHeight * 0.34,
            left: window.screen.availWidth * 0.5,
        },
    },
    play_enabled: {
        ...button_enabled('play')
    },
    play_disabled: {
        ...button_disabled('play')
    },
    delete_enabled: {
        ...button_enabled('delete')
    },
    delete_disabled: {
        ...button_disabled('delete')
    },
    select: {
        position: "relative",
        backgroundColor: "black",
        border: "1px solid white",
        color: "white",
        padding: "5px 15px",
        cursor: "pointer",
        margin: "5px",
        fontFamily: "Georgia",
    },
};
