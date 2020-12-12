import React from 'react';

import {save} from "../save.jss";
import {load} from "../load.jss";
import {erase} from "../erase.jss";
import {reset} from "../reset.jss";
import {home} from "../nav-bar/home.jss";
import {new_game} from "../nav-bar/new_game.jss";
import {load_game} from "../nav-bar/load_game.jss";
import {create_piece} from "../nav-bar/create_piece.jss";
import {my_pieces} from "../nav-bar/my_pieces.jss";
import {author_github} from "../nav-bar/author_github.jss";
import {chess_rules} from "../nav-bar/chess_rules.jss";
import {council_rules} from "../nav-bar/council_rules.jss";
import {right} from "../arrows/right.jss";
import {up_right} from "../arrows/up-right.jss";
import {up} from "../arrows/up.jss";
import {up_left} from "../arrows/up-left.jss";
import {left} from "../arrows/left.jss";
import {down_left} from "../arrows/down-left.jss";
import {down} from "../arrows/down.jss";
import {down_right} from "../arrows/down-right.jss";


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
    "0d": right,
    "45d": up_right,
    "90d": up,
    "135d": up_left,
    "180d": left,
    "225d": down_left,
    "270d": down,
    "315d": down_right
}
