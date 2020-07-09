from game_logic.coordType.rankfile.nest_level.funcs import funcs
from game_logic.coordType.Depth import Depth
from pprint import pprint


def xy_values_to_rf(json_obj, depth):
    """ """
    for k in json_obj.keys():
        if type(json_obj[k]) == dict:
            json_obj[k] = xy_values_to_rf(json_obj[k], depth)
        elif type(json_obj[k]) == list or type(json_obj[k]) == tuple:
            d = depth.get_new_depth(json_obj[k])
            converter = funcs[d]
            json_obj[k] = converter(json_obj[k])
    return json_obj


if __name__ == "__main__":
    json_obj = \
        {'board': {(1, 1): 'WR1',
                   (1, 2): '#',
                   (1, 3): 'WN2',
                   (1, 4): 'WP3',
                   (1, 5): '#',
                   (1, 6): '#',
                   (1, 7): '#',
                   (1, 8): 'BR1',
                   (2, 1): '#',
                   (2, 2): '#',
                   (2, 3): '#',
                   (2, 4): '#',
                   (2, 5): '#',
                   (2, 6): '#',
                   (2, 7): 'WP6',
                   (2, 8): '#',
                   (3, 1): '#',
                   (3, 2): 'BP1',
                   (3, 3): '#',
                   (3, 4): '#',
                   (3, 5): '#',
                   (3, 6): 'BN1',
                   (3, 7): '#',
                   (3, 8): 'BB1',
                   (4, 1): 'WQ1',
                   (4, 2): '#',
                   (4, 3): '#',
                   (4, 4): '#',
                   (4, 5): '#',
                   (4, 6): '#',
                   (4, 7): 'BP5',
                   (4, 8): 'BQ1',
                   (5, 1): 'WK1',
                   (5, 2): '#',
                   (5, 3): 'WB2',
                   (5, 4): 'WP4',
                   (5, 5): 'BP2',
                   (5, 6): '#',
                   (5, 7): '#',
                   (5, 8): 'BK1',
                   (6, 1): 'WB1',
                   (6, 2): 'WP1',
                   (6, 3): '#',
                   (6, 4): '#',
                   (6, 5): 'BP3',
                   (6, 6): '#',
                   (6, 7): '#',
                   (6, 8): 'BB2',
                   (7, 1): 'WN1',
                   (7, 2): '#',
                   (7, 3): '#',
                   (7, 4): 'WP5',
                   (7, 5): '#',
                   (7, 6): '#',
                   (7, 7): 'BP6',
                   (7, 8): 'BN2',
                   (8, 1): 'WR2',
                   (8, 2): 'WP2',
                   (8, 3): '#',
                   (8, 4): '#',
                   (8, 5): 'BP4',
                   (8, 6): '#',
                   (8, 7): '#',
                   (8, 8): 'BR2'},
         'color': 'B',
         'fen_data': {'castle_avail': 'KQkq',
                      'en_passant_avail': '-',
                      'fen': 'r1bqkbnr/1P1p2p1/2n5/4pp1p/P3P1P1/N3B3/2p2P1P/R2QKBNR b '
                             'KQkq - 1 11',
                      'fm_clock': 11,
                      'hm_clock': 1,
                      'turn': 'b'},
         'moves': {'castles': [((5, 1), (7, 1)), ((5, 1), (3, 1)), ((5, 8), (7, 8)), ((5, 8), (3, 8))],
                   'en_passant': [(3, 3)],
                   'promos': [((3, 2), (3, 1)), ((3, 2), (4, 1))]},
         'ranges': {'BB1': [(2, 7)],
                    'BB2': [(1, 3), (4, 6), (5, 7), (2, 4), (3, 5)],
                    'BK1': [(5, 7), (6, 7)],
                    'BN1': [(2, 8), (4, 4), (5, 7), (1, 5), (1, 7), (2, 4)],
                    'BN2': [(8, 6), (5, 7), (6, 6)],
                    'BP1': [(3, 1), (4, 1)],
                    'BP2': [],
                    'BP3': [(7, 4), (6, 4), (5, 4)],
                    'BP4': [(7, 4), (8, 4)],
                    'BP5': [(4, 5), (4, 6)],
                    'BP6': [(7, 6), (7, 5)],
                    'BQ1': [(2, 6), (6, 6), (5, 7), (1, 5), (7, 5), (3, 7), (8, 4)],
                    'BR1': [(2, 8), (1, 4), (1, 5), (1, 6), (1, 7)],
                    'BR2': [(8, 6), (8, 7)]},
         'records': {'condition': '',
                     'game_status': 1,
                     'kings_moved': {(5, 1): False, (5, 8): False},
                     'last_pawn_move': 'c2',
                     'num_consecutive_non_pawn_moves': 0,
                     'pawn_histories': {'BP1': [(2, 7), (2, 5), (2, 4), (2, 3), (3, 2)],
                                        'BP2': [(5, 7), (5, 5)],
                                        'BP3': [(6, 7), (6, 5)],
                                        'BP4': [(8, 7), (8, 5)],
                                        'BP5': [(4, 7)],
                                        'BP6': [(7, 7)],
                                        'WP1': [(6, 2)],
                                        'WP2': [(8, 2)],
                                        'WP3': [(1, 2), (1, 4)],
                                        'WP4': [(5, 2), (5, 4)],
                                        'WP5': [(7, 2), (7, 4)],
                                        'WP6': [(3, 2),
                                                (3, 3),
                                                (3, 4),
                                                (3, 5),
                                                (3, 6),
                                                (2, 7)]},
                     'rooks_moved': {(1, 1): False,
                                     (1, 8): False,
                                     (8, 1): False,
                                     (8, 8): False},
                     'winner': '-'}
         }
    pprint(xy_values_to_rf(json_obj, Depth()))
