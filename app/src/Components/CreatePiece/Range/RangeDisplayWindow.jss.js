import makeStyles from "@material-ui/core/styles/makeStyles";

const arrow = {
    cursor: 'pointer',
    backgroundColor: '#515151',
    '&:hover': {
        backgroundColor: '#5d5d5d'
    },
}

const listItem = {}


export const useStyles = makeStyles({
    window: props => ({
        position: 'absolute',
        display: 'grid',
        // borderRadius: '5px',
        border: '0.1em solid #a9a9a9',
        color: '#a9a9a9',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    })
})