import React from "react";
import {save} from "../options/save.jss";
import {load} from "../options/load.jss";
import {erase} from "../options/erase.jss";
import {reset} from "../options/reset.jss";
import {home} from "../nav-bar/home.jss";
import {app_title} from "../other/app_title.jss";
import {new_game} from "../nav-bar/new_game.jss";
import {load_game} from "../nav-bar/load_game.jss";
import {create_piece} from "../nav-bar/create_piece.jss";
import {my_pieces} from "../nav-bar/my_pieces.jss";
import {author_github} from "../nav-bar/author_github.jss";
import {chess_rules} from "../nav-bar/chess_rules.jss";
import {council_rules} from "../nav-bar/council_rules.jss";
import {new_game_cutout} from "../main-menu/new_game_cutout.jss";
import {load_game_cutout} from "../main-menu/load_game_cutout.jss";
import {create_piece_cutout} from "../main-menu/create_piece_cutout.jss";
import {my_pieces_cutout} from "../main-menu/my_pieces_cutout.jss";
import {author_github_cutout} from "../main-menu/author_github_cutout.jss";
import {chess_rules_cutout} from "../main-menu/chess_rules_cutout.jss";
import {council_rules_cutout} from "../main-menu/council_rules_cutout.jss";
import {right} from "../arrows/right.jss";
import {up_right} from "../arrows/up-right.jss";
import {up} from "../arrows/up.jss";
import {up_left} from "../arrows/up-left.jss";
import {left} from "../arrows/left.jss";
import {down_left} from "../arrows/down-left.jss";
import {down} from "../arrows/down.jss";
import {down_right} from "../arrows/down-right.jss";
import {white_img_icon} from "../other/white_img_icon";
import {black_img_icon} from "../other/black_img_icon";
import {bishop_filled} from "../sub-buttons/bishop-filled.jss";
import {rook_filled} from "../sub-buttons/rook-filled.jss";
import {queen_filled} from "../sub-buttons/queen-filled.jss";
import {knight_filled} from "../sub-buttons/knight-filled.jss";
import {bishop_outline} from "../sub-buttons/bishop-outline.jss";
import {rook_outline} from "../sub-buttons/rook-outline.jss";
import {queen_outline} from "../sub-buttons/queen-outline.jss";
import {knight_outline} from "../sub-buttons/knight-outline.jss";
import {none} from "../sub-buttons/none.jss";
import {save_as} from "../options/save_as.jss";
import {resign} from "../options/resign.jss";
import {account_circle} from "../other/account_circle.jss";
import {icon_tool} from "../create-piece/icon_tool";
import {range_tool} from "../create-piece/range_tool";
import {name_tool} from "../create-piece/name_tool";
import {options_tool} from "../create-piece/options_tool";
import {location_tool} from "../create-piece/location_tool";

export const icons = {
    home: home,
    app_title: app_title,
    name_tool: name_tool,
    icon_tool: icon_tool,
    range_tool: range_tool,
    location_tool: location_tool,
    options_tool: options_tool,
    'new-game': new_game,
    'load-game': load_game,
    'create-piece': create_piece,
    'chess-rules': chess_rules,
    'council-rules': council_rules,
    'my-pieces': my_pieces,
    'author-github': author_github,
    'new-game-cutout': new_game_cutout,
    'load-game-cutout': load_game_cutout,
    'create-piece-cutout': create_piece_cutout,
    'chess-rules-cutout': chess_rules_cutout,
    'council-rules-cutout': council_rules_cutout,
    'author-github-cutout': author_github_cutout,
    'my-pieces-cutout': my_pieces_cutout,
    white_img_icon: white_img_icon,
    black_img_icon: black_img_icon,
    bishop_filled: bishop_filled,
    bishop_outline: bishop_outline,
    rook_filled: rook_filled,
    rook_outline: rook_outline,
    queen_filled: queen_filled,
    queen_outline: queen_outline,
    knight_filled: knight_filled,
    knight_outline: knight_outline,
    account_circle: account_circle,
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