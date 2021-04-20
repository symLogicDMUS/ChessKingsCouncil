export const standardPieceDefs = {
    "Bishop": {
        "B": {
            "img":"https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fstandard%20piece%20images%2FBB.svg?alt=media&token=3ebbcac2-264f-4eea-9603-5346ce38a5d6",
            "spans": [
                "step_1sqr225d",
                "step_1sqr315d",
                "step_1sqr45d",
                "step_1sqr135d",
            ],
            "offsets": [],
        },
        "W": {
            "img":"https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fstandard%20piece%20images%2FWB.svg?alt=media&token=8197220b-1c25-4fb4-8220-b68546fb1dba",
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
            "img":"https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fstandard%20piece%20images%2FBN.svg?alt=media&token=22ea957a-0420-4709-885b-112f85e35a1b",
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
            "img":"https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fstandard%20piece%20images%2FWN.svg?alt=media&token=fba79c88-f13f-4c81-b701-eaa3c32111ad",
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
            "img":"https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fstandard%20piece%20images%2FBQ.svg?alt=media&token=67f545b3-5a72-4b11-8333-2e74c9337e58",
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
            "img":"https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fstandard%20piece%20images%2FWQ.svg?alt=media&token=d52a7466-6e6e-48ad-8f70-2ceb7170477d",
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
            "img":"https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fstandard%20piece%20images%2FBR.svg?alt=media&token=fe092c67-8327-492e-b3d5-601f70f2bb31",
            "spans": [
                "step_1sqr180d",
                "step_1sqr270d",
                "step_1sqr0d",
                "step_1sqr90d",
            ],
            "offsets": [],
        },
        "W": {
            "img":"https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fstandard%20piece%20images%2FWR.svg?alt=media&token=60884e5c-e3cb-4a87-bc27-8902247e751d",
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