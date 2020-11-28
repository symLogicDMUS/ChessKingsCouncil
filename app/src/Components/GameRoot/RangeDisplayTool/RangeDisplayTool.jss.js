import makeStyles from "@material-ui/core/styles/makeStyles";
const widget = {
    position: 'absolute',
    zIndex: '5',
    backgroundColor: 'green',
    borderRadius: '10px',
}
const label = {
    position: 'absolute',
    width: '70%',
    height: '10%',
    left: '10%',
    textAlign: 'left',
    fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
    color: '#b1faae',
    fontSize: '120%'
}

export const useStyles = makeStyles({
    expanded: {
        ...widget,
        width: window.screen.availWidth * 0.16,
        height: window.screen.availWidth * 0.16,
        left: window.screen.availWidth * 0.638,
        top: window.screen.availHeight * 0.315,
        "$&label": {
            ...label,
            top: '2%',
        }
    },
    collapsed: {
        ...widget,
        width: window.screen.availWidth * 0.16,
        height: window.screen.height * 0.04,
        left: window.screen.availWidth * 0.638,
        top: window.screen.availHeight * 0.315,
        "&$label":{
            ...label,
            top: "20%"
        }
    },
    label: {},
})