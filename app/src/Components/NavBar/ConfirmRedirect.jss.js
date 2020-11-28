import makeStyles from "@material-ui/core/styles/makeStyles";

const sizePosFont = (width, height, top, left) => ({
    position: 'absolute',
    zIndex: 'inherit',
    width: `${width}%`,
    height: `${height}%`,
    top: `${top}%`,
    left: `${left}%`,
    color: '#b6b6b6',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
})

const button = (width, height, top, left, borderColor) => ({
    ...sizePosFont(width, height, top, left),
    cursor: 'pointer',
    backgroundColor: '#5d5d5d',
    border: `1px solid ${borderColor}`,
    overflow: 'hidden',
    '&:hover': {
        color: '#515151',
        backgroundColor: '#b6b6b6'
    },
})

const text = (width, height, top, left, fontSize) => ({
    ...sizePosFont(width, height, top, left),
    fontSize: fontSize,
    wordWrap: 'break-word',
    overflowY: 'hidden',
})

export const useStyles = makeStyles({
    confirm_redirect: {
        zIndex: 9,
        backgroundColor: '#515151',
        border: '1px solid #5d5d5d'
    },
    title: {
        ...text(90, 10, 5, 5, 160),
    },
    text_body: {
        ...text(90, 50, 45, 5, 145),
    },
    yes_button: {
        ...button( 10, 5, 60, 20, '#a9a9a9'),
    },
    no_button: {
        ...button(10, 5, 60, 35, '#a9a9a9'),
    },
    close_window: {
        ...button(5, 5, 2, 95, 'none'),
    },
})