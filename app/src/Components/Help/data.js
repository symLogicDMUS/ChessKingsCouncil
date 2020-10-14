/**imports */

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
    children as pickTypeChildren,
} from "../NewGame/PickType/helpText";

import {
    titles as playAsTitle,
    paragraphs as playAsParagraph,
    numSlides as playAsNumSlides,
    children as playAsChildren,
} from "../NewGame/PlayAs/helpText";

import {
    titles as customizeTitles,
    paragraphs as customizeParagraphs,
    children as customizeChildren,
    numSlides as customizeNumSlides,
} from "../NewGame/Customize/helpTexts";

import {
    titles as gameRootTitles,
    paragraphs as gameRootParagraphs,
    children as gameRootChildren,
    numSlides as gameRootNumSlides,
} from "../GameRoot/helpTexts";


import {
    titles as myPiecesTitles,
    paragraphs as myPiecesParagraphs,
    children as myPiecesChildren,
    numSlides as myPiecesNumSlides,
} from "../MyPieces/helpTexts";

/**exports */

export var titles = {
    CreatePiece: createPieceTitles,
    PickType: pickTypeTitle,
    PlayAs: playAsTitle,
    Customize: customizeTitles,
    MyPieces: myPiecesTitles,
    GameRoot: gameRootTitles
};

export var paragraphs = {
    CreatePiece: createPieceParagraphs,
    PickType: pickTypeParagraph,
    PlayAs: playAsParagraph,
    Customize: customizeParagraphs,
    MyPieces: myPiecesParagraphs,
    GameRoot: gameRootParagraphs
};

export var numSlides = {
    CreatePiece: createPieceNumSlides,
    PickType: pickTypeNumSlides,
    PlayAs: playAsNumSlides,
    Customize: customizeNumSlides,
    MyPieces: myPiecesNumSlides,
    GameRoot:gameRootNumSlides
};

export var children = {
    CreatePiece: createPieceChildren,
    PickType: pickTypeChildren,
    PlayAs: playAsChildren,
    Customize: customizeChildren,
    MyPieces: myPiecesChildren,
    GameRoot: gameRootChildren
};
