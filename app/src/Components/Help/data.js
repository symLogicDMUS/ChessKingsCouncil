import {
    titles as createPieceTitles,
    paragraphs as createPieceParagraphs,
    numSlides as createPieceNumSlides,
    children as createPieceChildren,
} from "../CreatePiece/helpTexts";

import {
    titles as pickTypeTitle,
    paragraphs as pickTypeParagraph,
    numSlides as pickTypeNumSlides,
    children as pickTypeChildren
} from "../NewGame/PickType/helpText";

export var titles = {
    CreatePiece: createPieceTitles,
    PickType: pickTypeTitle
};

export var paragraphs = {
    CreatePiece: createPieceParagraphs,
    PickType: pickTypeParagraph
};

export var numSlides = {
    CreatePiece: createPieceNumSlides,
    PickType: pickTypeNumSlides
};

export var children = {
    CreatePiece: createPieceChildren,
    PickType: pickTypeChildren
};
