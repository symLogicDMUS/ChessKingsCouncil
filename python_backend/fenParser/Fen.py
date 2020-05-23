from custom_except import *
from coordType.to_rankfile import to_rankfile


class Fen:
    def __init__(self, fen, turn, castle_avail, en_passant_avail, hm_clock, fm_clock):
        self.fen = fen
        self.turn = turn
        self.castle_avail = castle_avail
        self.en_passant_avail = en_passant_avail
        self.hm_clock = int(hm_clock)
        self.fm_clock = int(fm_clock)

    def update_state(self, special_moves, json_records, start, dest, captured, color):
        """update the non piece-position attributes of the fen: turn, castle avail, en-passant avail, and clocks"""
        self.turn = color.lower()
        self._update_castle_avail(json_records)
        self.update_en_passant_avail(dest, special_moves, start)
        self._update_clocks(captured, color, json_records)

    def _update_clocks(self, captured, color, json_records):
        if json_records.num_consecutive_non_pawn_moves == 0 or captured != 'None':
            self.hm_clock = 0
        if color == 'B':
            self.fm_clock += 1

    def update_en_passant_avail(self, dest, special_moves, start):
        if (start, dest) in special_moves.en_passant:
            self.en_passant_avail = to_rankfile(dest)
        else:
            self.en_passant_avail = '-'

    def _update_castle_avail(self, json_records):
        if not json_records.kings_moved[(5, 1)] and not json_records.rooks_moved[(8, 1)]:
            K = 'K'
        else:
            K = ''
        if not json_records.kings_moved[(5, 1)] and not json_records.rooks_moved[(1, 1)]:
            Q = 'Q'
        else:
            Q = ''
        if not json_records.kings_moved[(5, 8)] and not json_records.rooks_moved[(8, 8)]:
            k = 'k'
        else:
            k = ''
        if not json_records.kings_moved[(5, 8)] and not json_records.rooks_moved[(8, 1)]:
            q = 'q'
        else:
            q = ''
        self.castle_avail = K + Q + k + q
        if self.castle_avail == '':
            self.castle_avail = '-'

    def get_data(self):
        """return the fen components as in an object that can be sent to React"""
        return {"fen": self.fen, "turn": self.turn, "castle_avail": self.castle_avail,
                "en_passant_avail": self.en_passant_avail,
                "hm_clock": self.hm_clock, "fm_clock": self.fm_clock}

    def set_get_new_fen(self, pos):
        """join the position string with the status attributes updated throughout the game, then return"""
        self.fen = " ".join(
            [pos, self.turn, self.castle_avail, self.en_passant_avail, str(self.hm_clock), str(self.fm_clock)])
        return self.fen
