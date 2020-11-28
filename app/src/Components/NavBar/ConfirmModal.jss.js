const sizePos = (width, height, top, left) => ({
    position: 'absolute',
    width: `${width}%`,
    height: `${height}%`,
    top: `${top}%`,
    left: `${left}%`,
})

const button = {
    position: 'absolute',
    zIndex: 'inherit',
    textAlign: 'center',
    color: '#b6b6b6',
    backgroundColor: '#5d5d5d',
    border: '1px solid #454849',
    fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    cursor: 'pointer',
    '&:hover': {
        color: '#515151',
        backgroundColor: '#b6b6b6'
    },
}

export const styles = {
    confirm_window: {
        position: 'absolute',
        zIndex: '20',
        backgroundColor: '#515151',
        border: '1px solid #5d5d5d'
    },
    text: {
        ...sizePos(90, 50, 45, 5),
        zIndex: 'inherit',
        color: '#b6b6b6',
        backgroundColor: '#515151',
        textAlign: 'center',
        fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
        fontSize: '145%',
        wordWrap: 'break-word',
        overflowY: 'hidden',
        textOverflow: 'ellipsis'
    },
    yes_button: {
        ...button,
        left: '60%',
    },

    no_button: {
        ...button,
        left: '60%',
    },
    close_window: {
        cursor: 'pointer',
        ...sizePos(5, 5, 2, 95),
        '&:hover': {
            backgroundColor: '#EC2525'
        },
    },
}