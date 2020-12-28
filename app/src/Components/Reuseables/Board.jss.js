export const bigBoardMargin = '0.25em';
export const mobileScalar = 0.68;

export const board = (fontSize) => ({
    fontSize: fontSize,
    '@media screen and (max-width: 767px)': {
        fontSize: fontSize * mobileScalar,
    },
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    lineHeight: '0',
    width: '8em',
    height: '8em',
});

export const game_board = (fontSize, z) => ({
    '@media screen and (min-width: 768px)': {
        position: 'fixed',
        margin: bigBoardMargin,
    },
    zIndex: z,
});