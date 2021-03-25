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
import {up_right} from "../arrows/up_right.jss";
import {up} from "../arrows/up.jss";
import {up_left} from "../arrows/up_left.jss";
import {left} from "../arrows/left.jss";
import {down_left} from "../arrows/down_left.jss";
import {down} from "../arrows/down.jss";
import {down_right} from "../arrows/down_right.jss";
import {right_bold} from "../arrows/bold/right_bold.jss";
import {up_right_bold} from "../arrows/bold/up_right_bold.jss";
import {up_bold} from "../arrows/bold/up_bold.jss";
import {up_left_bold} from "../arrows/bold/up_left_bold.jss";
import {left_bold} from "../arrows/bold/left_bold.jss";
import {down_left_bold} from "../arrows/bold/down_left_bold.jss";
import {down_bold} from "../arrows/bold/down_bold.jss";
import {down_right_bold} from "../arrows/bold/down_right_bold.jss";
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
import {save_alt} from "../options/save_alt.jss";
import {save_as} from "../options/save_as.jss";
import {save_as_alt} from "../options/save_as_alt.jss";
import {resign} from "../options/resign.jss";
import {resign_alt} from "../options/resign_alt.jss";
import {account_circle} from "../other/account_circle.jss";
import {icon_tool} from "../create-piece/icon_tool";
import {range_tool} from "../create-piece/range_tool";
import {name_tool} from "../create-piece/name_tool";
import {options_tool} from "../create-piece/options_tool";
import {location_tool} from "../create-piece/location_tool";
import {game_info} from "../game root/game_info.jss";
import {game_info2} from "../game root/game_info2.jss";
import {captured_pieces} from "../game root/captured_pieces.jss";
import {captured_pieces_alt} from "../game root/captured_pieces_alt.jss";

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
    'wide-0d': right,
    'wide-45d': up_right,
    'wide-90d': up,
    'wide-135d': up_left,
    'wide-180d': left,
    'wide-225d': down_left,
    'wide-270d': down,
    'wide-315d': down_right,
    'thin-0d': right_bold,
    'thin-45d': up_right_bold,
    'thin-90d': up_bold,
    'thin-135d': up_left_bold,
    'thin-180d': left_bold,
    'thin-225d': down_left_bold,
    'thin-270d': down_bold,
    'thin-315d': down_right_bold,
    save: save,
    save_as: save_as,
    save_alt: save_alt,
    save_as_alt: save_as_alt,
    resign: resign,
    resign_alt: resign_alt,
    load: load,
    reset: reset,
    erase: erase,
    game_info: game_info,
    game_info2: game_info2,
    captured_pieces: captured_pieces,
    captured_pieces_alt: captured_pieces_alt,
    none: none,
};