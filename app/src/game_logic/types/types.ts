enum SqrCases {
    OOB,
    EMPTY,
    FRIEND,
    ENEMY,
}
enum GameStatus {
    OVER,
    IN_PROGRESS
}
type Color = "W" | "B";

type Rank = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";

type File_ = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";

type Rankfile = `${Rank}${File_}`;

type Occurrence = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

type Coord = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

type Disp = -1 | -2 | -3 | -4 | 1 | 2 | 3 | 4;

type XY = [Coord, Coord];

type Offset = [Disp, Disp];

type Span = "step_1sqr180d" |
    "step_1sqr225d" |
    "step_1sqr270d" |
    "step_1sqr315d" |
    "step_1sqr0d" |
    "step_1sqr90d" |
    "step_1sqr45d" |
    "step_1sqr135d";

type FenId =
    "a" |
    "b" |
    "c" |
    "d" |
    "e" |
    "f" |
    "g" |
    "h" |
    "i" |
    "j" |
    "k" |
    "l" |
    "m" |
    "n" |
    "o" |
    "p" |
    "q" |
    "r" |
    "s" |
    "t" |
    "u" |
    "v" |
    "w" |
    "x" |
    "y" |
    "z";

type PieceId =
    "A" |
    "B" |
    "C" |
    "D" |
    "E" |
    "F" |
    "G" |
    "H" |
    "I" |
    "J" |
    "K" |
    "L" |
    "M" |
    "N" |
    "O" |
    "P" |
    "Q" |
    "R" |
    "S" |
    "T" |
    "U" |
    "V" |
    "W" |
    "X" |
    "Y" |
    "Z";

type Blank = "#";

type SqrContent = `${Color}${PieceId}${Occurrence}` | Blank;

type Stepper = (x: Coord, y: Coord) => XY;

type IdDict = {
    k: "King",
    p: "Pawn",
    q: string,
    r: string,
    b: string,
    n: string,
    a?: string,
    c?: string,
    d?: string,
    e?: string,
    f?: string,
    g?: string,
    h?: string,
    i?: string,
    j?: string,
    l?: string,
    m?: string,
    o?: string,
    s?: string,
    t?: string,
    u?: string,
    v?: string,
    w?: string,
    x?: string,
    y?: string,
    z?: string,
};

type Board = {
    a1: SqrContent,
    a2: SqrContent,
    a3: SqrContent,
    a4: SqrContent,
    a5: SqrContent,
    a6: SqrContent,
    a7: SqrContent,
    a8: SqrContent,
    b1: SqrContent,
    b2: SqrContent,
    b3: SqrContent,
    b4: SqrContent,
    b5: SqrContent,
    b6: SqrContent,
    b7: SqrContent,
    b8: SqrContent,
    c1: SqrContent,
    c2: SqrContent,
    c3: SqrContent,
    c4: SqrContent,
    c5: SqrContent,
    c6: SqrContent,
    c7: SqrContent,
    c8: SqrContent,
    d1: SqrContent,
    d2: SqrContent,
    d3: SqrContent,
    d4: SqrContent,
    d5: SqrContent,
    d6: SqrContent,
    d7: SqrContent,
    d8: SqrContent,
    e1: SqrContent,
    e2: SqrContent,
    e3: SqrContent,
    e4: SqrContent,
    e5: SqrContent,
    e6: SqrContent,
    e7: SqrContent,
    e8: SqrContent,
    f1: SqrContent,
    f2: SqrContent,
    f3: SqrContent,
    f4: SqrContent,
    f5: SqrContent,
    f6: SqrContent,
    f7: SqrContent,
    f8: SqrContent,
    g1: SqrContent,
    g2: SqrContent,
    g3: SqrContent,
    g4: SqrContent,
    g5: SqrContent,
    g6: SqrContent,
    g7: SqrContent,
    g8: SqrContent,
    h1: SqrContent,
    h2: SqrContent,
    h3: SqrContent,
    h4: SqrContent,
    h5: SqrContent,
    h6: SqrContent,
    h7: SqrContent,
    h8: SqrContent,
}