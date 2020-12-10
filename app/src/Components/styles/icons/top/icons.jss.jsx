import React from 'react';

import {save} from "../save.jss";
import {load} from "../load.jss";
import {erase} from "../erase.jss";
import {reset} from "../reset.jss";
import {home} from "../home.jss";
import {new_game} from "../new_game.jss";
import {load_game} from "../load_game.jss";
import {create_piece} from "../create_piece.jss";
import {my_pieces} from "../my_pieces.jss";
import {author_github} from "../author_github.jss";
import {chess_rules} from "../chess_rules.jss";
import {council_rules} from "../council_rules.jss";


export const icons = {
    'home': <path id="home" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
    'new-game': new_game,
    'load-game': load_game,
    'create-piece': create_piece,
    'chess-rules': chess_rules,
    'council-rules': council_rules,
    'my-pieces': my_pieces,
    'author-github': author_github,
    'save': save,
    'load': load,
    'reset': reset,
    'erase': erase,
}