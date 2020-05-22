
from fenParser.getStatus import *


def get_status(fen):
    """get the status parts of the fen string: the turn, castle availability, en-passant availability, and clocks"""
    status_str = get_status_str(fen)
    turn, castle_avail, en_passant_avail, hm_num, fm_num = parse_status_str(status_str)
    return turn, castle_avail, en_passant_avail, hm_num, fm_num