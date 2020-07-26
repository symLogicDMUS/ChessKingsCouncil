from pprint import pprint


def filter_empty_ranges(ranges):
    """ """
    ai_ranges = {}
    for piece_id in ranges.keys():
        if ranges[piece_id] != []:
            ai_ranges[piece_id] = ranges[piece_id]
    return ai_ranges


if __name__ == "__main__":
    pprint(filter_empty_ranges({'BB1': [],
                                'BB2': [],
                                'BK1': [],
                                'BN1': [(1, 6), (3, 6)],
                                'BN2': [(6, 6), (8, 6)],
                                'BP1': [(1, 6), (1, 5)],
                                'BP2': [(2, 6), (2, 5)],
                                'BP3': [(3, 6), (3, 5)],
                                'BP4': [(4, 6), (4, 5)],
                                'BP5': [(5, 6), (5, 5)],
                                'BP6': [(6, 6), (6, 5)],
                                'BP7': [(7, 6), (7, 5)],
                                'BP8': [(8, 6), (8, 5)],
                                'BQ1': [],
                                'BR1': [],
                                'BR2': []}))
