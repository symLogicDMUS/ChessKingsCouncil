from game_logic.fenParser.getStatus.get_status_str import get_status_str
from game_logic.fenParser.getStatus.parse_status_str import parse_status_str


def get_status(fen):
    """get the status parts of the fen string: the turn, castle availability, en-passant availability, and clocks"""
    status_str = get_status_str(fen)
    turn, castle_avail, en_passant_avail, hm_num, fm_num = parse_status_str(status_str)
    return turn, castle_avail, en_passant_avail, hm_num, fm_num