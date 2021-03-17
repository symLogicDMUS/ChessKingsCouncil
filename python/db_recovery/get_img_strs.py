import os
from pprint import pprint
from db_recovery.read_json import read_json


def get_img_strs(game_obj):
    """ """
    img_url_strs = []
    for piece_name in game_obj['defs'].keys():
        for color in ['W', 'B']:
            img_url_strs.append(game_obj['defs'][piece_name][color]['img'])
    return img_url_strs


if __name__ == '__main__':
    for game_name in os.listdir('./games/dev1'):
        print(os.path.abspath('.') + '\\games\\dev1\\' + game_name)
        game_obj = read_json(os.path.abspath('.') + '\\games\\dev1\\' + game_name)
        pprint(get_img_strs(game_obj))
