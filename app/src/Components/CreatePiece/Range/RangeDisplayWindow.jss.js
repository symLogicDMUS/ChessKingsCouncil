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
    window: {
        position: 'absolute',
        display: 'grid',
        zIndex: '0',
        "@media screen and (min-device-width: 768px)": {
            left: '2.5%',
            top: '27.33%',
            width: '60.25%',
            height: '66.667%',
        },
        "@media screen and (max-device-width: 767px)": {
            left: '62%',
            top: '7%',
            width: '35%',
            height: '90%',
        },
        borderRadius: '5px',
        border: '1px solid #a9a9a9',
        color: '#a9a9a9',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    }
})