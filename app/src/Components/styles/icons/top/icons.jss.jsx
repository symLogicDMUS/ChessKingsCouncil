import React from "react";
import { save } from "../save.jss";
import { load } from "../load.jss";
import { erase } from "../erase.jss";
import { reset } from "../reset.jss";
import { home } from "../nav-bar/home.jss";
import { new_game } from "../nav-bar/new_game.jss";
import { load_game } from "../nav-bar/load_game.jss";
import { create_piece } from "../nav-bar/create_piece.jss";
import { my_pieces } from "../nav-bar/my_pieces.jss";
import { author_github } from "../nav-bar/author_github.jss";
import { chess_rules } from "../nav-bar/chess_rules.jss";
import { council_rules } from "../nav-bar/council_rules.jss";
import { right } from "../arrows/right.jss";
import { up_right } from "../arrows/up-right.jss";
import { up } from "../arrows/up.jss";
import { up_left } from "../arrows/up-left.jss";
import { left } from "../arrows/left.jss";
import { down_left } from "../arrows/down-left.jss";
import { down } from "../arrows/down.jss";
import { down_right } from "../arrows/down-right.jss";
import { white_img_icon } from "../white_img_icon";
import { black_img_icon } from "../black_img_icon";
import { bishop_filled } from "../sub-buttons/bishop-filled.jss";
import { rook_filled } from "../sub-buttons/rook-filled.jss";
import { queen_filled } from "../sub-buttons/queen-filled.jss";
import { knight_filled } from "../sub-buttons/knight-filled.jss";
import { bishop_outline } from "../sub-buttons/bishop-outline.jss";
import { rook_outline } from "../sub-buttons/rook-outline.jss";
import { queen_outline } from "../sub-buttons/queen-outline.jss";
import { knight_outline } from "../sub-buttons/knight-outline.jss";
import { none } from "../sub-buttons/none.jss";
import { save_as } from "../save_as.jss";
import {resign} from "../resign.jss";

export const icons = {
    home: home,
    'new-game': new_game,
    'load-game': load_game,
    'create-piece': create_piece,
    'chess-rules': chess_rules,
    'council-rules': council_rules,
    'my-pieces': my_pieces,
    'author-github': author_github,
    'white-img-icon': white_img_icon,
    'black-img-icon': black_img_icon,
    bishop_filled: bishop_filled,
    bishop_outline: bishop_outline,
    rook_filled: rook_filled,
    rook_outline: rook_outline,
    queen_filled: queen_filled,
    queen_outline: queen_outline,
    knight_filled: knight_filled,
    knight_outline: knight_outline,
    '0d': right,
    '45d': up_right,
    '90d': up,
    '135d': up_left,
    '180d': left,
    '225d': down_left,
    '270d': down,
    '315d': down_right,
    save: save,
    save_as: save_as,
    resign: resign,
    load: load,
    reset: reset,
    erase: erase,
    none: none,

};