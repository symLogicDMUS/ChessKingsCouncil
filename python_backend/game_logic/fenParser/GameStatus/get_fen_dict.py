from game_logic.fenParser.GameStatus.get_status_str import get_status_str
from game_logic.fenParser.GameStatus.parse_status_str import parse_status_str


def get_fen_dict(fen):
    """ """
    """get the status parts of the fen string: the turn, castle availability, en-passant availability, and clocks"""
    status_str = get_status_str(fen)
    turn, castle_avail, en_passant_avail, hm_num, fm_num = parse_status_str(status_str)
    return {"fen": fen, "turn": turn, "castle_avail": castle_avail,
            "en_passant": en_passant_avail,
            "hm_clock": hm_num, "fm_clock": fm_num}
