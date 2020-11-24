import makeStyles from "@material-ui/core/styles/makeStyles";

const profileButton = {
    position: 'absolute',
    zIndex: 'inherit',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif'",
    color: '#a9a9a9',
    backgroundColor: '#5d5d5d',
    border: 'get-button-border-color($theme)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '&:hover': {
        backgroundColor: '#a9a9a9'
    },
}

export const useStyles = makeStyles({
    profileLoadButton: {
        ...profileButton,
        top: '22.5%',
        left: '86%',
    },
    profileDeleteButton: {
        ...profileButton,
        top: '22.5%',
        left: '93%',
    }

})


