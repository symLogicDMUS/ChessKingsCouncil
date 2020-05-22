from coordType.xy_list_to_rf import xy_list_to_rf
from coordType.to_rankfile import to_rankfile
from coordType.is_xy import is_xy
from pprint import pprint


def json_keys_to_rf(json_obj):
    """ """
    new_json_obj = {}
    for k in json_obj.keys():
        if type(json_obj[k]) == dict:
            json_obj[k] = json_keys_to_rf(json_obj[k])
        elif type(json_obj[k]) == list:
            json_obj[k] = xy_list_to_rf(json_obj[k])
        if is_xy(k):
            new_json_obj[to_rankfile(k)] = json_obj[k]
        else:
            new_json_obj[k] = json_obj[k]
    return new_json_obj


if __name__ == "__main__":
    json_obj = \
        {'board': {(1, 1): 'WR1',
                   (1, 2): 'WP1',
                   (1, 3): '#',
                   (1, 4): '#',
                   (1, 5): '#',
                   (1, 6): '#',
                   (1, 7): 'BP1',
                   (1, 8): 'BR1',
                   (2, 1): 'WN1',
                   (2, 2): 'WP2',
                   (2, 3): '#',
                   (2, 4): '#',
                   (2, 5): '#',
                   (2, 6): '#',
                   (2, 7): 'BP2',
                   (2, 8): 'BN1',
                   (3, 1): 'WB1',
                   (3, 2): 'WP3',
                   (3, 3): '#',
                   (3, 4): '#',
                   (3, 5): '#',
                   (3, 6): '#',
                   (3, 7): 'BP3',
                   (3, 8): 'BB1',
                   (4, 1): 'WQ1',
                   (4, 2): '#',
                   (4, 3): 'WP4',
                   (4, 4): '#',
                   (4, 5): '#',
                   (4, 6): '#',
                   (4, 7): 'BP4',
                   (4, 8): 'BQ1',
                   (5, 1): 'WK1',
                   (5, 2): 'WP5',
                   (5, 3): '#',
                   (5, 4): '#',
                   (5, 5): '#',
                   (5, 6): '#',
                   (5, 7): 'BP5',
                   (5, 8): 'BK1',
                   (6, 1): 'WB2',
                   (6, 2): 'WP6',
                   (6, 3): '#',
                   (6, 4): '#',
                   (6, 5): '#',
                   (6, 6): '#',
                   (6, 7): 'BP6',
                   (6, 8): 'BB2',
                   (7, 1): 'WN2',
                   (7, 2): 'WP7',
                   (7, 3): '#',
                   (7, 4): '#',
                   (7, 5): '#',
                   (7, 6): '#',
                   (7, 7): 'BP7',
                   (7, 8): 'BN2',
                   (8, 1): 'WR2',
                   (8, 2): 'WP8',
                   (8, 3): '#',
                   (8, 4): '#',
                   (8, 5): '#',
                   (8, 6): '#',
                   (8, 7): 'BP8',
                   (8, 8): 'BR2'},
         'color': 'W',
         'records': {'condition': '',
                     'game_status': 1,
                     'kings_moved': {(5, 1): False, (5, 8): False},
                     'last_pawn_move': 'None',
                     'num_consecutive_non_pawn_moves': 1,
                     'pawn_histories': {'BP1': [(1, 7)],
                                        'BP2': [(2, 7)],
                                        'BP3': [(3, 7)],
                                        'BP4': [(4, 7)],
                                        'BP5': [(5, 7)],
                                        'BP6': [(6, 7)],
                                        'BP7': [(7, 7)],
                                        'BP8': [(8, 7)],
                                        'WP1': [(1, 2)],
                                        'WP2': [(2, 2)],
                                        'WP3': [(3, 2)],
                                        'WP4': [(4, 2)],
                                        'WP5': [(5, 2)],
                                        'WP6': [(6, 2)],
                                        'WP7': [(7, 2)],
                                        'WP8': [(8, 2)]},
                     'rooks_moved': {(1, 1): False,
                                     (1, 8): False,
                                     (8, 1): False,
                                     (8, 8): False},
                     'winner': '-'}}
    pprint(json_keys_to_rf(json_obj))
