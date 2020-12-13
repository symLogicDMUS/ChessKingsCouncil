import copy


def replace_img_name_with_b64_str(b64_str_dict, defs):
    """ """
    new_defs = copy.deepcopy(defs)
    for img_name in b64_str_dict.keys():
        for piece_name in new_defs.keys():
            for color in ['W', 'B']:
                if new_defs[piece_name][color]['img'] == img_name:
                    new_defs[piece_name][color]['img'] = b64_str_dict[img_name]
    return new_defs


def convert_defs_from_dd(b64_str_dict, dd):
    new_dd = copy.deepcopy(dd)
    for game_name in new_dd.keys():
        new_dd[game_name]['defs'] = replace_img_name_with_b64_str(b64_str_dict, new_dd[game_name]['defs'])
    return new_dd