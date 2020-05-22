from custom_except import *
from coordType.rankmap import rankmap
from coordType.is_rankfile import is_rankfile


def to_rankfile(sqr):
    """take (x,y) and convert to rankfile"""
    if is_rankfile(sqr):
        return sqr
    rank = rankmap[sqr[0]]
    file = str(sqr[1])
    return rank + file


if __name__ == "__main__":

    coordinates = \
        [(1, 8), (2, 8), (3, 8), (4, 8), (5, 8), (6, 8), (7, 8), (8, 8),
         (1, 7), (2, 7), (3, 7), (4, 7), (5, 7), (6, 7), (7, 7), (8, 7),
         (1, 6), (2, 6), (3, 6), (4, 6), (5, 6), (6, 6), (7, 6), (8, 6),
         (1, 5), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5), (8, 5),
         (1, 4), (2, 4), (3, 4), (4, 4), (5, 4), (6, 4), (7, 4), (8, 4),
         (1, 3), (2, 3), (3, 3), (4, 3), (5, 3), (6, 3), (7, 3), (8, 3),
         (1, 2), (2, 2), (3, 2), (4, 2), (5, 2), (6, 2), (7, 2), (8, 2),
         (1, 1), (2, 1), (3, 1), (4, 1), (5, 1), (6, 1), (7, 1), (8, 1)]

    # for i in range(len(coordinates)):
    #     print(to_rankfile(coordinates[i]), end=' ')
    #     if (i + 1) % 8 == 0:
    #         print('')
    i = 0
    for y in range(1, 9):
        for x in range(1, 9):
            i += 1
            print("<div key='{}'>{}</div>".format(to_rankfile((x, y)), i))
