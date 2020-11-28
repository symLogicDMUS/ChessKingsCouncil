import makeStyles from "@material-ui/core/styles/makeStyles";

export const styles = {
    board: {
        position: 'absolute',
        zIndex: '0',
        "@media screen and (min-device-width: 768px)": {
            width: window.screen.availWidth * 0.39,
            height: window.screen.availWidth * 0.39,
            top: window.screen.availHeight * 0.195,
            left: window.screen.availWidth * 0.17,
        },
        "@media screen and (max-device-width: 767px)": {
            width: window.screen.availHeight * 0.6 * 0.9 - window.screen.availWidth * 0.01 * 2,
            height: window.screen.availHeight * 0.6 * 0.9 - window.screen.availWidth * 0.01 * 2,
            top: window.screen.availWidth * 0.01 * 10,
            left: window.screen.availWidth * 0.01 * 3,
        },
        lineHeight: '0',
        WebkitBoxShadow: '0px 0px 20px white',
        boxShadow: '0px 0px 20px white'
    },
}