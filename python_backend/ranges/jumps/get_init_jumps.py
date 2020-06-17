

def get_init_jumps(offsets, board, sqr, color):
    """jumps are square that can be reached through a piece jumping"""
    jumps = []
    while len(offsets) > 0:
        x1, y1 = offsets.pop(0)
        jumps.append((sqr[0] + x1, sqr[1] + y1))
    return jumps
