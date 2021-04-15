const [OVER, IN_PROGRESS] = [0, 1];

/**
 * data that is same for every new (standard) game
 * */
export const newData = {
    color: "W",
    fen_data: {
        turn: "w",
        castle_avail: "KQkq",
        en_passant_avail: "-",
        hm_clock: 0,
        fm_clock: 1,
    },
    board: {
        a1: 'WR1', a2: 'WP1', a3: '#', a4: '#', a5: '#', a6: '#', a7: 'BP1', a8: 'BR1',
        b1: 'WN1', b2: 'WP2', b3: '#', b4: '#', b5: '#', b6: '#', b7: 'BP2', b8: 'BN1',
        c1: 'WB1', c2: 'WP3', c3: '#', c4: '#', c5: '#', c6: '#', c7: 'BP3', c8: 'BB1',
        d1: 'WQ1', d2: 'WP4', d3: '#', d4: '#', d5: '#', d6: '#', d7: 'BP4', d8: 'BQ1',
        e1: 'WK1', e2: 'WP5', e3: '#', e4: '#', e5: '#', e6: '#', e7: 'BP5', e8: 'BK1',
        f1: 'WB2', f2: 'WP6', f3: '#', f4: '#', f5: '#', f6: '#', f7: 'BP6', f8: 'BB2',
        g1: 'WN2', g2: 'WP7', g3: '#', g4: '#', g5: '#', g6: '#', g7: 'BP7', g8: 'BN2',
        h1: 'WR2', h2: 'WP8', h3: '#', h4: '#', h5: '#', h6: '#', h7: 'BP8', h8: 'BR2'
    },
    json_records: {
        rooks_moved: {
            h1: false,
            a1: false,
            h8: false,
            a8: false,
        },
        kings_moved: {
            e1: false,
            e8: false,
        },
        pawn_histories: {
            WP1: ["a2"],
            WP2: ["b2"],
            WP3: ["c2"],
            WP4: ["d2"],
            WP5: ["e2"],
            WP6: ["f2"],
            WP7: ["g2"],
            WP8: ["h2"],
            BP1: ["a7"],
            BP2: ["b7"],
            BP3: ["c7"],
            BP4: ["d7"],
            BP5: ["e7"],
            BP6: ["f7"],
            BP7: ["g7"],
            BP8: ["h7"],
        },
        last_pawn_move: "None",
        num_consecutive_non_pawn_moves: 0,
    },
    tal: 0,
    "imgUrlStrs":[],
    moves: { en_passant: [], castles: [], promos: [] },
    status: { condition: "", status: IN_PROGRESS, winner: "-" },
    ranges: {
        WB1: [],
        WR1: [],
        WB2: [],
        WR2: [],
        WK1: [],
        WQ1: [],
        WP1: ["a3", "a4"],
        WP2: ["b3", "b4"],
        WP3: ["c3", "c4"],
        WP4: ["d3", "d4"],
        WP5: ["e3", "e4"],
        WP6: ["f3", "f4"],
        WP7: ["g3", "g4"],
        WP8: ["h3", "h4"],
        WN1: ["a3", "c3"],
        WN2: ["f3", "h3"],
    },
    enemy_ranges: {
        BB1: [],
        BR1: [],
        BB2: [],
        BR2: [],
        BK1: [],
        BQ1: [],
        BP1: ["a6", "a5"],
        BP2: ["b6", "b5"],
        BP3: ["c6", "c5"],
        BP4: ["d6", "d5"],
        BP5: ["e6", "e5"],
        BP6: ["f6", "f5"],
        BP7: ["g6", "g5"],
        BP8: ["h6", "h5"],
        BN1: ["a6", "c6"],
        BN2: ["f6", "h6"],
    },
    promos: ["Queen", "Rook", "Bishop", "Knight"],
    captured: {
        W: [],
        B: [],
    },
    id_dict: {
        k: "King",
        q: "Queen",
        r: "Rook",
        b: "Bishop",
        n: "Knight",
        p: "Pawn",
    },
};

export const newStandardRanges = {
    WB1: [],
    WR1: [],
    WB2: [],
    WR2: [],
    WK1: [],
    WQ1: [],
    WP1: ["a3", "a4"],
    WP2: ["b3", "b4"],
    WP3: ["c3", "c4"],
    WP4: ["d3", "d4"],
    WP5: ["e3", "e4"],
    WP6: ["f3", "f4"],
    WP7: ["g3", "g4"],
    WP8: ["h3", "h4"],
    WN1: ["a3", "c3"],
    WN2: ["f3", "h3"],
};

export const enemyRanges = {
    BB1: [],
    BR1: [],
    BB2: [],
    BR2: [],
    BK1: [],
    BQ1: [],
    BP1: ["a6", "a5"],
    BP2: ["b6", "b5"],
    BP3: ["c6", "c5"],
    BP4: ["d6", "d5"],
    BP5: ["e6", "e5"],
    BP6: ["f6", "f5"],
    BP7: ["g6", "g5"],
    BP8: ["h6", "h5"],
    BN1: ["a6", "c6"],
    BN2: ["f6", "h6"],
};

export const standardIdDict = {
    k: "King",
    q: "Queen",
    r: "Rook",
    b: "Bishop",
    n: "Knight",
    p: "Pawn",
};

export const standardPromoNames = ["Queen", "Rook", "Bishop", "Knight"];

export const newStandardImgUrls = [
    "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBB.svg?alt=media&token=e84dac52-fd53-46c4-a06c-06ea93053612",
    "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBK.svg?alt=media&token=bed8526b-b997-4f19-a87e-ca5a0c8bc170",
    "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBN.svg?alt=media&token=ad698ee8-6f1c-41ae-8dc4-22a5e363d0a3",
    "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBP.svg?alt=media&token=8723da28-a3bf-4533-bfea-e2a79ecea91c",
    "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBQ.svg?alt=media&token=005f4741-56fe-4bb4-b6aa-533d41ebfc24",
    "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBR.svg?alt=media&token=abb1a899-02ac-4e2d-895a-6310bce36c09",
    "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWB.svg?alt=media&token=7868db67-7fe2-46fd-a4d5-f413b26f2f07",
    "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWK.svg?alt=media&token=f36b8488-27fe-4655-aacb-86ff92d454ce",
    "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWN.svg?alt=media&token=4fee02d6-9838-41c5-b1dc-a06160ec7308",
    "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWP.svg?alt=media&token=a1547873-8d8c-4d29-917f-87ffff156419",
    "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWQ.svg?alt=media&token=d8ca66fc-085b-43a2-96e4-a7235392d266",
    "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWR.svg?alt=media&token=f5c32f16-7031-43e6-a33b-f32b5d58a506",
]