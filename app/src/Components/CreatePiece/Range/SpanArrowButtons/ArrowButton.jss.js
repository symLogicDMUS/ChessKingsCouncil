import makeStyles from "@material-ui/core/styles/makeStyles";
const buttonPos = {
    "135d": {gridRow: 1, gridColumn: 1 },
    "90d": {gridRow: 1, gridColumn: 2 },
    "45d": {gridRow: 1, gridColumn: 3 },
    "180d": {gridRow: 2, gridColumn: 1 },
    "0d": {gridRow: 2, gridColumn: 3 },
    "225d": {gridRow: 3, gridColumn: 1 },
    "270d": {gridRow: 3, gridColumn: 2 },
    "315d": {gridRow: 3, gridColumn: 3 },
};

const container = (angle) => ({
    // position: "absolute",
    ...buttonPos[angle],
    width: '3em',
    height: '3em',
    border: '1px solid #a9a9a9',
    borderRadius: '0.2em',
    backgroundColor: "#515151",
})

export const useStyles = makeStyles({
    container_normal: props => ({
        ...container(props.angle),
        backgroundColor: '#515151',
        '&:hover': {
            backgroundColor: '#a9a9a9'
        },
    }),
    container_selected: props => ({
        ...container(props.angle),
        backgroundColor: '#ec2525',
        '&:hover': {
            backgroundColor: '#ec2525'
        },
    }),
    arrow_button: props => ({
        width: '100%',
        height: '100%',
    }),

    vector: (props) =>  ({
        width: '150%',
        height: '150%',
        color: props.theme.checkmark,
    }),
});
