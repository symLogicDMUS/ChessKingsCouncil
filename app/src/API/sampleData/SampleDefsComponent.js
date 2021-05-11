import {useEffect} from "react";
import {Typography} from "@material-ui/core";
import '../../Components/styles/Background/_backgrounds.scss';
import {refactorDefOffsets} from "./refactorDefOffsets";

export function SampleDefsComponent() {
    const dbSampleDefs = {
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
        "Docker": {
            "B": {
                "img": "/Images/Pieces/Samples/docker-red.svg",
                "offsets": [
                    "2,-1",
                    "0,-1",
                    "1,-1",
                    "-1,-1",
                    "-2,-1",
                    "1,-2",
                    "0,-2",
                    "-1,-2",
                    "-1,-3",
                    "0,1"
                ]
            },
            "W": {
                "img": "/Images/Pieces/Samples/docker.svg",
                "offsets": [
                    "-2,1",
                    "0,1",
                    "-1,1",
                    "1,1",
                    "2,1",
                    "-1,2",
                    "0,2",
                    "1,2",
                    "1,3",
                    "0,-1"
                ]
            }
        },
        "Dragon": {
            "B": {
                "img": "/Images/Pieces/Samples/dragon-black.svg",
                "offsets": [
                    "2,-1",
                    "1,-2",
                    "-1,-2",
                    "-2,-1",
                    "-2,1",
                    "-1,2",
                    "1,2",
                    "2,1"
                ],
                "spans": [
                    "step_1sqr270d",
                    "step_1sqr225d",
                    "step_1sqr180d",
                    "step_1sqr135d",
                    "step_1sqr90d",
                    "step_1sqr45d",
                    "step_1sqr0d",
                    "step_1sqr315d"
                ]
            },
            "W": {
                "img": "/Images/Pieces/Samples/dragon-white.svg",
                "offsets": [
                    "-2,1",
                    "-1,2",
                    "1,2",
                    "2,1",
                    "2,-1",
                    "1,-2",
                    "-1,-2",
                    "-2,-1"
                ],
                "spans": [
                    "step_1sqr90d",
                    "step_1sqr45d",
                    "step_1sqr0d",
                    "step_1sqr315d",
                    "step_1sqr270d",
                    "step_1sqr225d",
                    "step_1sqr180d",
                    "step_1sqr135d"
                ]
            }
        },
        "Evil Morty": {
            "B": {
                "img": "/Images/Pieces/Samples/evil_morty_red.svg",
                "offsets": [
                    "0,1",
                    "1,0",
                    "-1,0",
                    "0,-1"
                ],
                "spans": [
                    "step_1sqr225d",
                    "step_1sqr135d",
                    "step_1sqr45d",
                    "step_1sqr315d"
                ]
            },
            "W": {
                "img": "/Images/Pieces/Samples/evil_morty_white.svg",
                "offsets": [
                    "0,-1",
                    "-1,0",
                    "1,0",
                    "0,1"
                ],
                "spans": [
                    "step_1sqr45d",
                    "step_1sqr315d",
                    "step_1sqr225d",
                    "step_1sqr135d"
                ]
            }
        },
        "Firelord": {
            "B": {
                "img": "/Images/Pieces/Samples/black_firehat.svg",
                "offsets": [
                    "2,-1",
                    "1,-2",
                    "-1,-2",
                    "-2,-1",
                    "0,1"
                ],
                "spans": [
                    "step_1sqr270d",
                    "step_1sqr225d",
                    "step_1sqr180d",
                    "step_1sqr0d",
                    "step_1sqr315d"
                ]
            },
            "W": {
                "img": "/Images/Pieces/Samples/white_firehat.svg",
                "offsets": [
                    "-2,1",
                    "-1,2",
                    "1,2",
                    "2,1",
                    "0,-1"
                ],
                "spans": [
                    "step_1sqr90d",
                    "step_1sqr45d",
                    "step_1sqr0d",
                    "step_1sqr180d",
                    "step_1sqr135d"
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
        "Material UI": {
            "B": {
                "img": "/Images/Pieces/Samples/material-ui-red.svg",
                "offsets": [
                    "2,-3",
                    "1,-2",
                    "0,-1",
                    "-1,-2",
                    "-2,-3",
                    "-2,-1",
                    "2,0",
                    "2,-1",
                    "-3,0",
                    "-4,-1",
                    "-4,-3",
                    "-2,0"
                ]
            },
            "W": {
                "img": "/Images/Pieces/Samples/material-ui.svg",
                "offsets": [
                    "-2,3",
                    "-1,2",
                    "0,1",
                    "1,2",
                    "2,3",
                    "2,1",
                    "-2,0",
                    "-2,1",
                    "3,0",
                    "4,1",
                    "4,3",
                    "2,0"
                ]
            }
        },
        "Node": {
            "B": {
                "img": "/Images/Pieces/Samples/node-red.png",
                "offsets": [
                    "0,2",
                    "1,1",
                    "2,0",
                    "1,-1",
                    "0,-2",
                    "-1,-1",
                    "-2,0",
                    "-1,1"
                ]
            },
            "W": {
                "img": "/Images/Pieces/Samples/node-green.png",
                "offsets": [
                    "0,-2",
                    "-1,-1",
                    "-2,0",
                    "-1,1",
                    "0,2",
                    "1,1",
                    "2,0",
                    "1,-1"
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
                "img": "/Images/Pieces/Standard/WQ.svg",
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
    }
    useEffect(() => {
        document.body.className = 'tan-background';
    }, [])
    return (
        <Typography paragraph>
            <pre>
                {JSON.stringify(refactorDefOffsets(dbSampleDefs), null, 4)}
            </pre>
        </Typography>
    )
}