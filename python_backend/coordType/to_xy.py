from custom_except import *
from coordType.rankmap import rankmap


def to_xy(rankfile):
    """convert rankfile to (x, y)"""
    if type(rankfile) == tuple:
        return rankfile
    x = rankmap.index(rankfile[0])
    y = int(rankfile[1])
    return (x, y)


if __name__ == "__main__":

    rankfiles = ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8',
                 'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7',
                 'a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6',
                 'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5',
                 'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4',
                 'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3',
                 'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2',
                 'a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1']

    for i in range(len(rankfiles)):
        print(to_xy(rankfiles[i]), end = ' ')
        if (i + 1) % 8 == 0:
            print('')

    print('\n')

    alignments = ['a6','b6','b6','c6','c6','d6','d6','e6','e6','f6','f6','g6','g6','h6',
                  'a3','b3','b3','c3','c3','d3','d3','e3','e3','f3','f3','g3','g3','h3']

    for i in range(len(alignments)):
        print(to_xy(alignments[i]), end = ' ')