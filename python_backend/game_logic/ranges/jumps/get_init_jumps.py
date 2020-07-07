

def get_init_jumps(offsets, board, sqr, color):
    """jumps are square that can be reached through a piece jumping"""
    jumps = []
    for offset in offsets:
        x1, y1 = offset
        jumps.append((sqr[0] + x1, sqr[1] + y1))
    return jumps
