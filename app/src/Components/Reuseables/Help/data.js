/**imports */

import {
    titles as createPieceTitles,
    paragraphs as createPieceParagraphs,
    numSlides as createPieceNumSlides,
    children as createPieceChildren,
} from "../../CreatePiece/helpTexts";

import {
    titles as pickNameTitle,
    paragraphs as pickNameParagraph,
    numSlides as pickNameNumSlides,
    children as pickNameChildren,
} from "../../NewGame/PickName/helpText";

import {
    titles as loadGameTitles,
    paragraphs as loadGameParagraphs,
    numSlides as loadGameNumSlides,
    children as loadGameChildren
} from "../../LoadGame/helpText";

import {
    titles as councilRulesTitles,
    paragraphs as councilRulesParagraphs,
    numSlides as councilRulesNumSlides,
    children as councilRulesChildren
} from "../../CouncilRules/helpText";

import {
    titles as pickTypeTitle,
    paragraphs as pickTypeParagraph,
    numSlides as pickTypeNumSlides,
    children as pickTypeChildren,
} from "../../NewGame/PickType/helpText";

import {
    titles as playAsTitle,
    paragraphs as playAsParagraph,
    numSlides as playAsNumSlides,
    children as playAsChildren,
} from "../../NewGame/PlayAs/helpText";

import {
    titles as customizeTitles,
    paragraphs as customizeParagraphs,
    children as customizeChildren,
    numSlides as customizeNumSlides,
} from "../../NewGame/Customize/helpTexts";

import {
    titles as gameRootTitles,
    paragraphs as gameRootParagraphs,
    children as gameRootChildren,
    numSlides as gameRootNumSlides,
} from "../../GameRoot/helpTexts";


import {
    titles as myPiecesTitles,
    paragraphs as myPiecesParagraphs,
    children as myPiecesChildren,
    numSlides as myPiecesNumSlides,
} from "../../MyPieces/helpTexts";

/**exports */

export var titles = {
    CreatePiece: createPieceTitles,
    PickName: pickNameTitle,
    PickType: pickTypeTitle,
    PlayAs: playAsTitle,
    Customize: customizeTitles,
    LoadGame: loadGameTitles,
    MyPieces: myPiecesTitles,
    GameRoot: gameRootTitles,
    CouncilRules: councilRulesTitles
};

export var paragraphs = {
    CreatePiece: createPieceParagraphs,
    PickName: pickNameParagraph,
    PickType: pickTypeParagraph,
    PlayAs: playAsParagraph,
    Customize: customizeParagraphs,
    LoadGame: loadGameParagraphs,
    MyPieces: myPiecesParagraphs,
    GameRoot: gameRootParagraphs,
    CouncilRules: councilRulesParagraphs
};

export var numSlides = {
    CreatePiece: createPieceNumSlides,
    PickName: pickNameNumSlides,
    PickType: pickTypeNumSlides,
    PlayAs: playAsNumSlides,
    Customize: customizeNumSlides,
    LoadGame: loadGameNumSlides,
    MyPieces: myPiecesNumSlides,
    GameRoot:gameRootNumSlides,
    CouncilRules: councilRulesNumSlides
};

export var children = {
    CreatePiece: createPieceChildren,
    PickName: pickNameChildren,
    PickType: pickTypeChildren,
    PlayAs: playAsChildren,
    Customize: customizeChildren,
    LoadGame: loadGameChildren,
    MyPieces: myPiecesChildren,
    GameRoot: gameRootChildren,
    CouncilRules: councilRulesChildren
};
