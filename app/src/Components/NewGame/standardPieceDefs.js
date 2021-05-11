export const standardPieceDefs = {
    "Bishop": {
        "B": {
            "img":"/Images/Pieces/Standard/BB.svg",
            "spans": [
                "step_1sqr225d",
                "step_1sqr315d",
                "step_1sqr45d",
                "step_1sqr135d",
            ],
            "offsets": [],
        },
        "W": {
            "img":"/Images/Pieces/Standard/WB.svg",
            "spans": [
                "step_1sqr45d",
                "step_1sqr135d",
                "step_1sqr225d",
                "step_1sqr315d",
            ],
            "offsets": [],
        },
    },
    "Knight": {
        "B": {
            "img":"/Images/Pieces/Standard/BN.svg",
            "offsets": [
                [1, 2],
                [1, -2],
                [-1, 2],
                [-1, -2],
                [2, 1],
                [2, -1],
                [-2, 1],
                [-2, -1],
            ],
            "spans": [],
        },
        "W": {
            "img":"/Images/Pieces/Standard/WN.svg",
            "offsets": [
                [1, 2],
                [1, -2],
                [-1, 2],
                [-1, -2],
                [2, 1],
                [2, -1],
                [-2, 1],
                [-2, -1],
            ],
            "spans": [],
        },
    },
    "Queen": {
        "B": {
            "img":"/Images/Pieces/Standard/BQ.svg",
            "spans": [
                "step_1sqr180d",
                "step_1sqr225d",
                "step_1sqr270d",
                "step_1sqr315d",
                "step_1sqr0d",
                "step_1sqr90d",
                "step_1sqr45d",
                "step_1sqr135d",
            ],
            "offsets": [],
        },
        "W": {
            "img":"/Images/Pieces/Standard/WQ.svg",
            "spans": [
                "step_1sqr0d",
                "step_1sqr45d",
                "step_1sqr90d",
                "step_1sqr135d",
                "step_1sqr180d",
                "step_1sqr225d",
                "step_1sqr270d",
                "step_1sqr315d",
            ],
            "offsets": [],
        },
    },
    "Rook": {
        "B": {
            "img":"/Images/Pieces/Standard/BR.svg",
            "spans": [
                "step_1sqr180d",
                "step_1sqr270d",
                "step_1sqr0d",
                "step_1sqr90d",
            ],
            "offsets": [],
        },
        "W": {
            "img":"/Images/Pieces/Standard/WR.svg",
            "spans": [
                "step_1sqr0d",
                "step_1sqr90d",
                "step_1sqr180d",
                "step_1sqr270d",
            ],
            "offsets": [],
        },
    }
};
Object.preventExtensions(standardPieceDefs);
Object.seal(standardPieceDefs);
Object.freeze(standardPieceDefs);