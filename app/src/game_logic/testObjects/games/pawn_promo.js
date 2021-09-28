export let pawnPromo = {
    board: {
        a1: "WR1",
        b1: "#",
        c1: "#",
        d1: "WQ1",
        e1: "WK1",
        f1: "WB1",
        g1: "WN1",
        h1: "WR2",
        a2: "#",
        b2: "#",
        c2: "BP1",
        d2: "#",
        e2: "#",
        f2: "WP1",
        g2: "#",
        h2: "WP2",
        a3: "WN2",
        b3: "#",
        c3: "#",
        d3: "#",
        e3: "WB2",
        f3: "#",
        g3: "#",
        h3: "#",
        a4: "WP3",
        b4: "#",
        c4: "#",
        d4: "#",
        e4: "WP4",
        f4: "#",
        g4: "WP5",
        h4: "#",
        a5: "#",
        b5: "#",
        c5: "#",
        d5: "#",
        e5: "BP2",
        f5: "BP3",
        g5: "#",
        h5: "BP4",
        a6: "#",
        b6: "#",
        c6: "BN1",
        d6: "#",
        e6: "#",
        f6: "#",
        g6: "#",
        h6: "#",
        a7: "#",
        b7: "WP6",
        c7: "#",
        d7: "BP5",
        e7: "#",
        f7: "#",
        g7: "BP6",
        h7: "#",
        a8: "BR1",
        b8: "#",
        c8: "BB1",
        d8: "BQ1",
        e8: "BK1",
        f8: "BB2",
        g8: "BN2",
        h8: "BR2",
    },
    records: {
        rooks_moved: { h1: false, a1: false, h8: false, a8: false },
        kings_moved: { e1: false, e8: false },
        pawn_histories: {
            WP3: ["a2", "a4"],
            WP6: ["c2", "c3", "c4", "c5", "c6", "b7"],
            WP4: ["e2", "e4"],
            WP1: ["f2"],
            WP5: ["g2", "g4"],
            WP2: ["h2"],
            BP1: ["b7", "b5", "b4", "b3", "c2"],
            BP5: ["d7"],
            BP2: ["e7", "e5"],
            BP3: ["f7", "f5"],
            BP6: ["g7"],
            BP4: ["h7", "h5"],
        },
        last_pawn_move: "c2",
        num_consecutive_non_pawn_moves: 0,
        status: 1,
        condition: "",
        winner: "-",
    },
    color: "B",
    defs: {
        ids: {
            b: "Duke",
            f: "Joker",
            n: "Knight",
            r: "Rook",
            q: "Jester",
            y: "Morty",
        },

        ranges: {
            Duke: {
                offsets: [
                    [1, 1],
                    [2, 1],
                    [3, 1],
                ],
                spans: [
                    "step_1sqr90d",
                    "step_1sqr45d",
                    "step_1sqr0d",
                    "step_1sqr315d",
                    "step_1sqr270d",
                    "step_1sqr225d",
                    "step_1sqr180d",
                    "step_1sqr135d",
                ],
            },

            Jester: { offsets: [], spans: ["step_1sqr45d", "step_1sqr315d"] },

            Joker: {
                offsets: [
                    [1, 3],
                    [1, -3],
                ],
                spans: ["step_1sqr315d", "step_1sqr270d", "step_1sqr225d"],
            },

            Knight: {
                offsets: [
                    [1, 2],
                    [-1, 2],
                    [1, -2],
                    [-1, -2],
                    [2, 1],
                    [-2, 1],
                    [2, -1],
                    [-2, -1],
                ],
                spans: [],
            },

            Rook: {
                offsets: [],
                spans: [
                    "step_1sqr0d",
                    "step_1sqr90d",
                    "step_1sqr180d",
                    "step_1sqr270d",
                ],
            },

            Morty: {
                offsets: [
                    [2, 1],
                    [2, -2],
                ],
                spans: ["step_1sqr90d", "step_1sqr0d", "step_1sqr45d"],
            },
        },
    },
};
// module.exports = pawnPromo;
