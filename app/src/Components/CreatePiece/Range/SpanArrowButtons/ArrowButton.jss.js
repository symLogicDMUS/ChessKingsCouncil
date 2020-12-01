import makeStyles from "@material-ui/core/styles/makeStyles";
const buttonPos = {
    "135d": {top: "0%", left: "0%" },
    "90d": {top: "0%", left: "35%" },
    "45d": {top: "0%", left: "70%" },
    "180d": {top: "35%", left: "0%" },
    "0d": {top: "35%", left: "70%" },
    "225d": {top: "70%", left: "0%" },
    "270d": {top: "70%", left: "35%" },
    "315d": {top: "70%", left: "70%" },
};

const button = (pos) => ({
    position: "absolute",
    ...buttonPos[pos],
    zIndex: "0",
    width: "30%",
    height: "30%",
    borderRadius: "5px",
    cursor: "pointer",
    border: "1px solid '#a9a9a9'",
    backgroundColor: "#515151",
})

export const useStyles = makeStyles({
    button_normal: props => ({
        ...button(props.pos),
        backgroundColor: '#515151',
        '&:hover': {
            backgroundColor: '#a9a9a9'
        },
    }),
    button_selected: props => ({
        ...button(props.pos),
        backgroundColor: '#ec2525',
        '&:hover': {
            backgroundColor: '#ec2525'
        },
    }),
    vector: {
        position: 'absolute',
        zIndex: '0',
        width: '66.667%',
        height: '66.667%',
        left: '16.66%',
        top: '16.66%'
    },
});
