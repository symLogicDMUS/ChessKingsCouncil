import makeStyles from "@material-ui/core/styles/makeStyles";

const pageLinkIcon = {
    gridRow: 1,
    cursor: "pointer",
    display: "grid",
    gridTemplateColumns: "25% 75%",
    backgroundColor: "#515151",
    borderRight: "1px solid #707070",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    textDecoration: "none",
}

export const useStyles = makeStyles({
    home: {
        gridColumn: 2,
        ...pageLinkIcon,
    },
    new_game: {
        gridColumn: 3,
        ...pageLinkIcon,
    },

    load_game: {
        gridColumn: 4,
        ...pageLinkIcon,
    },

    create_piece: {
        gridColumn: 5,
        ...pageLinkIcon,
    },

    chess_rules: {
        gridColumn: 6,
        ...pageLinkIcon,
    },

    council_rules: {
        gridColumn: 7,
        ...pageLinkIcon,
    },

    my_pieces: {
        gridColumn: 8,
        ...pageLinkIcon,
    },

    author_github: {
        gridColumn: 9,
        ...pageLinkIcon,
    },

    /**children of page-link buttons: */

    text: {
        gridRow: "1",
        gridColumn: "2",
        textAlign: "center",
        paddingTop: "8%",
        color: "#b6b6b6",
        fontSize: "140%",
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        wordwrap: "break-word",
    },
    icon: {
        gridRow: "1",
        gridColumn: "1",
    },
    image: {
        cursor: 'pointer',
        zIndex: '0',
        width: '80%',
        marginLeft: '13%',
        marginTop: '12%',
    },
});
