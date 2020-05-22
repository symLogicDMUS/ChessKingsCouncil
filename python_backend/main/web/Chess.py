import os
import platform

from jsonRecords.JsonRecords import JsonRecords
from misc.promote import promote
from fenParser.Fen import Fen
from getters.get_board import get_board
from getters.get_status import get_status
from getters.get_pathdata_dict import get_pathdata_dict
from getters.get_next_color import get_next_color
from getters.get_ranges import get_ranges
from getters.get_piece_dicts import get_piece_dicts
from getters.get_king_locs import get_king_locs
from getters.get_threat_area import get_threat_area
from getters.get_num_pieces_checking_king import get_num_pieces_checking_king
from getters.get_pins import get_pins
from getters.get_multithreat_restriction import get_multithreat_restriction
from getters.get_final_ranges import get_final_ranges
from movePiece.is_legal import is_legal
from movePiece.move import move
from ranges.specialMoves.SpecialMoves import SpecialMoves
from coordType.to_rankfile import to_rankfile
from coordType.is_xy import is_xy


class Chess:
    def __init__(self, game_name):
        self.game_name = game_name
        self.fen_obj, self.board, self.json_records = self.get_data(game_name, 'python_backend')
        self.color = self.fen_obj.turn.upper()
        self.special_moves = SpecialMoves()
        self.ranges = {}
        self.start = "_"
        self.dest = "_"
        self.npck = -1
        self.captured = False

    def set_ply(self, ply):
        """set the move about to be made, recieved from front-end"""
        if not is_xy(ply['start']) or not is_xy(ply['dest']):
            print('error in Chess.set_ply: argument not valid type')
        else:
            self.start, self.dest = ply['start'], ply['dest']

    def get_board(self):
        """convert board dict keys to rankfiles and return"""
        board = {}
        for sqr in self.board.keys():
            board[to_rankfile(sqr)] = self.board[sqr]
        return board

    def get_data(self, game_name, backend_dir):
        """get the data saved in the files for a game_name
        WARNING: uses relative paths, should only be called from top level of application
        """
        # TODO: change ./example_games to  ./saved_games when comfortable that games working correctly
        backend_dir = self.get_fullpath(backend_dir)
        original_dir = os.path.realpath('.')
        os.chdir(backend_dir)
        f = open("./example_games/{}/{}.fen".format(game_name, game_name))
        fen = f.readline()
        f.close()
        board = get_board(fen)
        turn, castle_avail, en_passant_avail, hm_num, fm_num = get_status(fen)
        fen_obj = Fen(fen, turn, castle_avail, en_passant_avail, hm_num, fm_num)
        json_records = JsonRecords("./example_games/{}/{}.json".format(game_name, game_name), board)
        os.chdir(original_dir)
        return fen_obj, board, json_records

    def current_move_legal(self):
        """request from React to move the piece at main to location dest"""
        if is_legal(self.ranges, self.board, self.start, self.dest):
            return 1
        else:
            return 0

    def move_piece(self):
        """move a piece on the board dict"""
        self.board, self.captured = move(self.board, self.start, self.dest, self.color, self.special_moves)

    def promote_pawn(self):
        """if a pawn is up for promotion, then promote it, then return an updated board and a promotion flag"""
        self.board, self.p_flag, = promote(self.board, self.start, self.dest, self.color, default=True)

    def update_data(self):
        """update the json-records history, relevant info of fen string, and get the color of next turn """
        self.json_records.update_hist(self.board[self.dest], self.start, self.dest, self.p_flag)
        self.fen_obj.update_state(self.special_moves, self.json_records, self.start, self.dest, self.captured, self.color)
        self.color = get_next_color(self.color)

        return self.board

    def update_ranges(self):
        """ """
        init_ranges, pins, mt_restricts, self.ranges = get_piece_dicts(self.board, self.color)
        init_ranges, self.special_moves = get_ranges(self.board, self.color, init_ranges, self.json_records)
        k_loc = get_king_locs(self.board, self.color)
        threat_area = get_threat_area(k_loc, self.board, self.color)
        pd_dict = get_pathdata_dict(k_loc, self.board, self.color)
        pins = get_pins(k_loc, self.board, self.color, pd_dict, pins)
        self.npck = get_num_pieces_checking_king(k_loc, self.board, self.color, pd_dict)
        mt_restricts = get_multithreat_restriction(self.board, self.npck, self.color)
        self.ranges = get_final_ranges(init_ranges, pins, threat_area, self.ranges, mt_restricts, self.color)

    def update_state(self):
        """update the state of the game, i.e. check, checkmate, stalemate, draw, or none of the above"""
        self.json_records.update_state(self.board, self.ranges, get_next_color(self.color), self.npck)

    def get_fullpath(self, dirname_):
        """get the fullpath of directory name dirname_ when dirname_ is a basename"""
        current = '.'
        if platform.system() == 'Windows':
            root = "C:\\"
        else:
            root = '/'
        fullpath = 'not-found'
        while fullpath == 'not-found':
            if os.path.basename(os.path.realpath(current)) == dirname_:
                fullpath = os.path.realpath(current)
            elif os.path.basename(os.path.realpath(current)) == root:
                break
            else:
                current = '../' + current
        return fullpath


if __name__ == "__main__":
    chess = Chess('New')