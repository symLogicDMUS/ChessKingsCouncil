from game_logic.coordType import Depth
from game_logic.coordType.xy.nest_level.funcs import funcs
from game_logic.coordType.rankfile.is_rankfile import is_rankfile
from pprint import pprint


def rf_values_to_xy(json_obj, depth):
    """ """
    for k in json_obj.keys():
        if type(json_obj[k]) == dict:
            json_obj[k] = rf_values_to_xy(json_obj[k], depth)
        else:
            d = depth.get_new_depth(json_obj[k])
            converter = funcs[d]
            if (d > 0 and type(json_obj[k]) == list) or (type(json_obj[k]) == str and is_rankfile(json_obj[k])):
                json_obj[k] = converter(json_obj[k])
    return json_obj


if __name__ == "__main__":
    json_obj = \
        {'board': {'a1': 'WR1',
                   'a2': '#',
                   'a3': 'WN2',
                   'a4': 'WP3',
                   'a5': '#',
                   'a6': '#',
                   'a7': '#',
                   'a8': 'BR1',
                   'b1': '#',
                   'b2': '#',
                   'b3': '#',
                   'b4': '#',
                   'b5': '#',
                   'b6': '#',
                   'b7': 'WP6',
                   'b8': '#',
                   'c1': '#',
                   'c2': 'BP1',
                   'c3': '#',
                   'c4': '#',
                   'c5': '#',
                   'c6': 'BN1',
                   'c7': '#',
                   'c8': 'BB1',
                   'd1': 'WQ1',
                   'd2': '#',
                   'd3': '#',
                   'd4': '#',
                   'd5': '#',
                   'd6': '#',
                   'd7': 'BP5',
                   'd8': 'BQ1',
                   'e1': 'WK1',
                   'e2': '#',
                   'e3': 'WB2',
                   'e4': 'WP4',
                   'e5': 'BP2',
                   'e6': '#',
                   'e7': '#',
                   'e8': 'BK1',
                   'f1': 'WB1',
                   'f2': 'WP1',
                   'f3': '#',
                   'f4': '#',
                   'f5': 'BP3',
                   'f6': '#',
                   'f7': '#',
                   'f8': 'BB2',
                   'g1': 'WN1',
                   'g2': '#',
                   'g3': '#',
                   'g4': 'WP5',
                   'g5': '#',
                   'g6': '#',
                   'g7': 'BP6',
                   'g8': 'BN2',
                   'h1': 'WR2',
                   'h2': 'WP2',
                   'h3': '#',
                   'h4': '#',
                   'h5': 'BP4',
                   'h6': '#',
                   'h7': '#',
                   'h8': 'BR2'},
         'color': 'B',
         'fen_data': {'castle_avail': 'KQkq',
                      'en_passant_avail': '-',
                      'fen': 'r1bqkbnr/1P1p2p1/2n5/4pp1p/P3P1P1/N3B3/2p2P1P/R2QKBNR b '
                             'KQkq - 1 11',
                      'fm_clock': 11,
                      'hm_clock': 1,
                      'turn': 'b'},
         'moves': {'castles': [['e1', 'g1'], ['e1', 'c1'], ['e8', 'g8'], ['e8', 'c8']],
                   'en_passant': ['c3'],
                   'promos': [['c2', 'c1'], ['c2', 'd1']]},
         'ranges': {'BB1': ['b7'],
                    'BB2': ['a3', 'd6', 'e7', 'b4', 'c5'],
                    'BK1': ['e7', 'f7'],
                    'BN1': ['b8', 'd4', 'e7', 'a5', 'a7', 'b4'],
                    'BN2': ['h6', 'e7', 'f6'],
                    'BP1': ['c1', 'd1'],
                    'BP2': [],
                    'BP3': ['g4', 'f4', 'e4'],
                    'BP4': ['g4', 'h4'],
                    'BP5': ['d5', 'd6'],
                    'BP6': ['g6', 'g5'],
                    'BQ1': ['b6', 'f6', 'e7', 'a5', 'g5', 'c7', 'h4'],
                    'BR1': ['b8', 'a4', 'a5', 'a6', 'a7'],
                    'BR2': ['h6', 'h7']},
         'records': {'condition': '',
                     'status': 1,
                     'kings_moved': {'e1': False, 'e8': False},
                     'last_pawn_move': 'c2',
                     'num_consecutive_non_pawn_moves': 0,
                     'pawn_histories': {'BP1': ['b7', 'b5', 'b4', 'b3', 'c2'],
                                        'BP2': ['e7', 'e5'],
                                        'BP3': ['f7', 'f5'],
                                        'BP4': ['h7', 'h5'],
                                        'BP5': ['d7'],
                                        'BP6': ['g7'],
                                        'WP1': ['f2'],
                                        'WP2': ['h2'],
                                        'WP3': ['a2', 'a4'],
                                        'WP4': ['e2', 'e4'],
                                        'WP5': ['g2', 'g4'],
                                        'WP6': ['c2', 'c3', 'c4', 'c5', 'c6', 'b7']},
                     'rooks_moved': {'a1': False,
                                     'a8': False,
                                     'h1': False,
                                     'h8': False},
                     'winner': '-'}}
    pprint(rf_values_to_xy(json_obj, Depth()))
