import React from "react";
import {new_game} from "./new_game";
import {load_game} from "./load_game";
import {author_github} from "./author_github";
import {create_piece} from "./create_piece";
import {chess_rules} from "./chess_rules";
import {council_rules} from "./council_rules";
import {my_pieces} from "./my_pieces";

export const main_menu_text = {
    'New Game': new_game,
    'Load Game': load_game,
    "Create Piece": create_piece,
    "My Pieces":my_pieces,
    "Chess Rules":chess_rules,
    "Council Rules":council_rules,
    "Author's GitHub": author_github,
}