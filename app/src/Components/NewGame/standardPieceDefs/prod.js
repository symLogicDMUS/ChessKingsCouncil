export const standardPieceDefs = {
    "Bishop": {
        "B": {
            "img": "/Images/Pieces/Standard/BB.svg",
            "spans": [
                "step_1sqr225d",
                "step_1sqr315d",
                "step_1sqr45d",
                "step_1sqr135d"
            ]
        },
        "W": {
            "img": "/Images/Pieces/Standard/WB.svg",
            "spans": [
                "step_1sqr45d",
                "step_1sqr135d",
                "step_1sqr225d",
                "step_1sqr315d"
            ]
        }
    },
    "Knight": {
        "B": {
            "img": "/Images/Pieces/Standard/BN.svg",
            "offsets": [
                "1,2",
                "1,-2",
                "-1,2",
                "-1,-2",
                "2,1",
                "2,-1",
                "-2,1",
                "-2,-1"
            ]
        },
        "W": {
            "img": "/Images/Pieces/Standard/WN.svg",
            "offsets": [
                "1,2",
                "1,-2",
                "-1,2",
                "-1,-2",
                "2,1",
                "2,-1",
                "-2,1",
                "-2,-1"
            ]
        }
    },
    "Queen": {
        "B": {
            "img": "/Images/Pieces/Standard/BQ.svg",
            "spans": [
                "step_1sqr180d",
                "step_1sqr225d",
                "step_1sqr270d",
                "step_1sqr315d",
                "step_1sqr0d",
                "step_1sqr90d",
                "step_1sqr45d",
                "step_1sqr135d"
            ]
        },
        "W": {
            "img": "/Images/Pieces/Standard/",
            "spans": [
                "step_1sqr0d",
                "step_1sqr45d",
                "step_1sqr90d",
                "step_1sqr135d",
                "step_1sqr180d",
                "step_1sqr225d",
                "step_1sqr270d",
                "step_1sqr315d"
            ]
        }
    },
    "Rook": {
        "B": {
            "img": "/Images/Pieces/Standard/BR.svg",
            "spans": [
                "step_1sqr180d",
                "step_1sqr270d",
                "step_1sqr0d",
                "step_1sqr90d"
            ]
        },
        "W": {
            "img": "/Images/Pieces/Standard/WR.svg",
            "spans": [
                "step_1sqr0d",
                "step_1sqr90d",
                "step_1sqr180d",
                "step_1sqr270d"
            ]
        }
    }
};

Object.preventExtensions(standardPieceDefs);
Object.seal(standardPieceDefs);
Object.freeze(standardPieceDefs);