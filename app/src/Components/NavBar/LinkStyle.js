const navButtonStyle = {
    cursor: "pointer",
    display: "grid",
    width: "$page-icon-width",
    gridTemplateColumns: "25% 75%",
    backgroundColor: "#515151",
    borderRight: "1px solid #707070",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textDecoration: "none",
};

export const styles = {
    "go-to-help": {
        gridColumn: "1",
        backgroundColor: "#515151",
        borderRight: "1px solid #707070",
        ...navButtonStyle,
    },
    "go-to-home": {
        gridColumn: "2",
        zIndex: "10",
        ...navButtonStyle,
    },
    "go-to-new-game": {
        gridColumn: "3",
        zIndex: "9",
        ...navButtonStyle,
    },
    "go-to-load-game": {
        gridColumn: "4",
        zIndex: "8",
        ...navButtonStyle,
    },
    "go-to-create-piece": {
        gridColumn: "5",
        zIndex: "7",
        ...navButtonStyle,
    },
    "go-to-chess-rules": {
        gridColumn: "6",
        zIndex: "6",
        ...navButtonStyle,
    },
    "go-to-council-rules": {
        gridColumn: "7",
        zIndex: "5",
        ...navButtonStyle,
    },
    "go-to-my-pieces": {
        gridColumn: "8",
        zIndex: "4",
        ...navButtonStyle,
    },
    "go-to-author-github": {
        gridColumn: "9",
        zIndex: "3",
        ...navButtonStyle,
    },
    "togle-nav": {
        gridColumn: "10",
        zIndex: "1",
        cursor: "pointer",
        ...navButtonStyle,
    },
};
