from pprint import pprint


def get_pawn_ranges(pawn_tuples, ranges):
    """ """
    pawn_dict = {}
    for t in pawn_tuples:
        pawn_dict[t] = ranges[t[1]]
    return pawn_dict


if __name__ == "__main__":
    pawn_tuples =\
    [((3, 2), 'BP1'),
     ((5, 5), 'BP2'),
     ((6, 5), 'BP3'),
     ((8, 5), 'BP4'),
     ((4, 7), 'BP5'),
     ((7, 7), 'BP6')]
    ranges = \
        {'BP1': [(3, 1), (4, 1)],
         'BP2': [],
         'BP3': [(7, 4), (6, 4), (5, 4)],
         'BP4': [(7, 4), (8, 4)],
         'BN1': [(2, 8), (4, 4),
                 (5, 7), (1, 5),
                 (1, 7), (2, 4)],
         'BP5': [(4, 5), (4, 6)],
         'BP6': [(7, 6), (7, 5)],
         'BR1': [(2, 8), (1, 4),
                 (1, 5), (1, 6),
                 (1, 7)],
         'BB1': [(2, 7)],
         'BQ1': [(2, 6), (6, 6),
                 (5, 7), (1, 5),
                 (7, 5), (3, 7),
                 (8, 4)],
         'BK1': [(5, 7), (6, 7)],
         'BB2': [(1, 3), (4, 6),
                 (5, 7), (2, 4),
                 (3, 5)],
         'BN2': [(8, 6), (5, 7),
                 (6, 6)],
         'BR2': [(8, 6), (8, 7)]}
    pprint(get_pawn_ranges(pawn_tuples, ranges))