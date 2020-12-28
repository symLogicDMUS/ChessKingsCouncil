import makeStyles from "@material-ui/core/styles/makeStyles";

const button = (left) => ({
    position: 'absolute',
    zIndex: 'inherit',
    textAlign: 'center',
    fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
    color: '#a9a9a9',
    backgroundColor: '#515151',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

})

export const useStyles = makeStyles({
    ok_active: {
        ...button('20%'),
        cursor: 'pointer',
        '&:hover': {
            color: '#4f4f4f',
            backgroundColor: '#a9a9a9'
        }
    },
    ok_inactive: {
        "@media screen and (min-device-width: 768px)": {
            ...button('10%'),
        },
        "@media screen and (max-device-width: 767px)": {
            ...button('75%')
        },
        cursor: 'not-allowed'
    },
    delete_active: {
        "@media screen and (min-device-width: 768px)": {
            ...button('20%'),
        },
        "@media screen and (max-device-width: 767px)": {
            ...button('80%'),
        },
        cursor: 'pointer',
        '&:hover': {
            color: '#4f4f4f',
            backgroundColor: '#a9a9a9'
        },
    },
    delete_inactive: {
        "@media screen and (min-device-width: 768px)": {
            ...button('20%'),
        },
        "@media screen and (max-device-width: 767px)": {
            ...button('80%'),
        },
        cursor: 'not-allowed',
    },
})