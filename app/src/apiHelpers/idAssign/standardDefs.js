const standardDefs = {
    "Bishop": {
        "B": {
            "img": "BB.svg",
            "offsets": [],
            "spans": [
                "step_1sqr225d",
                "step_1sqr315d",
                "step_1sqr45d",
                "step_1sqr135d"
            ]
        },
        "W": {
            "img": "WB.svg",
            "offsets": [],
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
            "img": "BN.svg",
            "offsets": [
                [
                    -1,
                    -2
                ],
                [
                    -1,
                    2
                ],
                [
                    1,
                    -2
                ],
                [
                    1,
                    2
                ],
                [
                    -2,
                    -1
                ],
                [
                    -2,
                    1
                ],
                [
                    2,
                    -1
                ],
                [
                    2,
                    1
                ]
            ],
            "spans": []
        },
        "W": {
            "img": "WN.svg",
            "offsets": [
                [
                    1,
                    2
                ],
                [
                    1,
                    -2
                ],
                [
                    -1,
                    2
                ],
                [
                    -1,
                    -2
                ],
                [
                    2,
                    1
                ],
                [
                    2,
                    -1
                ],
                [
                    -2,
                    1
                ],
                [
                    -2,
                    -1
                ]
            ],
            "spans": []
        }
    },
    "Queen": {
        "B": {
            "img": "BQ.svg",
            "offsets": [],
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
            "img": "WQ.svg",
            "offsets": [],
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
            "img": "BR.svg",
            "offsets": [],
            "spans": [
                "step_1sqr180d",
                "step_1sqr270d",
                "step_1sqr0d",
                "step_1sqr90d"
            ]
        },
        "W": {
            "img": "WR.svg",
            "offsets": [],
            "spans": [
                "step_1sqr0d",
                "step_1sqr90d",
                "step_1sqr180d",
                "step_1sqr270d"
            ]
        }
    }
}
// module.exports = standardIds;