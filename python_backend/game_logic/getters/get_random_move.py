import random


def get_random_move(board, ranges):
    """pick the location of a random id in ranges as start, and then pick random square in its range list as dest """
    id_ = random.choice(list(ranges.keys()))
    while not ranges[id_]:
        id_ = random.choice(list(ranges.keys()))
    start = list(filter(lambda sqr: board[sqr] == id_, board.keys()))[0]
    dest = random.choice(ranges[id_])
    return start, dest
