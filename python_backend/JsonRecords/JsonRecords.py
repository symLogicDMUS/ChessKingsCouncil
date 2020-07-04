from coordType.xy.map_rf_to_xy import map_rf_to_xy
from status.g_status_types import *
from piece_type.get_piece_type import get_piece_type
from piece_type.get_piece_types import get_piece_types
from JsonRecords.JsonRecordError import JsonRecordError
import json


class JsonRecords(object):
    """contains info for new or saved game relevant to performing a castle or en_passant"""

    def __init__(self, file, board, j_records=None):
        """new instance of object created for every update to piece final_ranges i.e. @app.update()
        :param file: json record file for a particular game
        :param board: dict discribing the game board
        :param j_records: contains the records of a game in progress
        """
        if j_records is None:
            f = open(file, "r")
            json_data = f.read()
            records = json.loads(json_data)
            json.dumps(records, indent=4, sort_keys=False)
            records = map_rf_to_xy(records)
            f.close()
        else:
            records = j_records

        self.rooks_moved = records['rooks_moved']
        self.kings_moved = records['kings_moved']
        self.pawn_histories = records['pawn_histories']
        self.last_pawn_move = records['last_pawn_move']
        self.num_consecutive_non_pawn_moves = records['num_consecutive_non_pawn_moves']
        self.game_status = records['game_status']
        self.condition = records['condition']
        self.winner = records['winner']

        if j_records is None:
            self._init_pawn_ids(board, file=file)

    def _init_pawn_ids(self, board, file=""):
        """exchange the sqr that pawn started the game with, with the id for that pawn"""
        pawn_histories = {}
        for hist in self.pawn_histories.values():
            sqr1 = hist[-1]
            id_ = board[sqr1]
            pawn_histories[id_] = hist
            if get_piece_type(id_) != 'Pawn':
                print("ERROR: Pawn history not correct")
                raise JsonRecordError
        self.pawn_histories = pawn_histories

    def _pawn_keys_to_current_rf(self):
        """swap the key of each pawn_history entry with the coordinate of its current location"""
        pawn_histories = {}
        for hist in self.pawn_histories.values():
            sqr = hist[-1]
            pawn_histories[sqr] = hist
        self.pawn_histories = pawn_histories

    def update_hist(self, id_, start, dest, promo_flag):
        """update json records depending on the piece type of id_ at location start"""
        p_type = get_piece_type(id_)
        if p_type != "Pawn":
            self.num_consecutive_non_pawn_moves += 1
            if p_type == 'Rook' and start in self.rooks_moved.keys():
                self.update_rooks_moved(start)
            elif p_type == 'King' and start in self.kings_moved.keys():
                self.update_kings_moved(start)
        else:
            self.reset_non_pawn_moves()
            self.last_pawn_move = dest
            self.update_pawn_history(id_, dest, promo_flag)
        return

    def update_state(self, board, ranges, enemy_color, npck):
        """
         update the status of the game: OVER or IN_PROGRESS
         update the winner of the game: 'w', 'b', or '-' (neither)
         udpate the condition of the enemy king: 'check', 'checkmate', 'stalemate', or 'safe'
         :param board: dict, game board
         :param npck: int, number of pieces checking the king
         :param ranges: dict, ranges of pieces of color
         :param enemy_color: str, color of king
        """

        if not any(ranges.values()):
            if npck > 0:
                self.condition, self.game_status, self.winner = 'checkmate', OVER, enemy_color
            else:
                self.condition, self.game_status, self.winner = 'stalemate', OVER, '-'
            return

        piece_types = get_piece_types(board)
        if piece_types == ['King', 'King']:
            self.condition, self.game_status, self.winner = 'stalemate', OVER, '-'
        elif piece_types == ['Bishop', 'King', 'King']:
            self.condition, self.game_status, self.winner = 'stalemate', OVER, '-'
        elif piece_types == ['King', 'King', 'Knight']:
            self.condition, self.game_status, self.winner = 'stalemate', OVER, '-'
        elif npck > 0:
            self.condition, self.game_status, self.winner = 'check', IN_PROGRESS, '-'
        else:
            self.condition, self.game_status, self.winner = '', IN_PROGRESS, '-'

    def update_rooks_moved(self, sqr):
        """update rooks_moved because rook that start game at sqr has moved"""
        self.rooks_moved[sqr] = True

    def update_kings_moved(self, sqr):
        """update kings_moved because king that started game at sqr has moved"""
        self.kings_moved[sqr] = True

    def update_pawn_history(self, id_, new_loc, promo):
        """update location of pawn by appending its new location to its history"""
        print("id", id_)
        print("new_loc", new_loc)
        print("promo", promo)
        if promo:
            del self.pawn_histories[id_]
        else:
            self.pawn_histories[id_].append(new_loc)

    def get_records(self):
        """return the json records as one python dict"""
        return {'rooks_moved': self.rooks_moved, 'kings_moved': self.kings_moved,
                'pawn_histories': self.pawn_histories, 'last_pawn_move': self.last_pawn_move,
                'num_consecutive_non_pawn_moves': self.num_consecutive_non_pawn_moves,
                'game_status': self.game_status, 'condition': self.condition, 'winner': self.winner}

    def reset_non_pawn_moves(self):
        """ a pawn has just moved, so reset number of consecutive non pawn moves to 0"""
        self.num_consecutive_non_pawn_moves = 0

    def delete_pawn(self, id):
        """delete pawn with id from pawn histories"""
        del self.pawn_histories[id]

    def has_king_moved(self, color):
        """return true/false of if the King of color has moved from its starting position"""
        if color == 'W':
            return self.kings_moved[(5, 1)]
        elif color == 'B':
            return self.kings_moved[(5, 8)]
        else:
            print('error: not a valid color\n')
            return -1

    def get_start_king(self, color):
        """get starting position of king based off of color"""
        if color == 'W':
            return 5, 1
        elif color == 'B':
            return 5, 8
        else:
            print('error:invalid color')
            return -1

    def update_rook_dict(self, rooks_moved):
        """update rooks_moved dict to a new one"""
        self.rooks_moved = rooks_moved

    def queen_side_rook_moved(self, color):
        """return true if the queen side rook of the given color has moved, otherwise false"""

        if color == 'W':
            return self.rooks_moved[(1, 1)]
        elif color == 'B':
            return self.rooks_moved[(1, 8)]

    def king_side_rook_moved(self, color):
        """return true if the king side rook of the given color has moved, otherwise false"""

        if color == 'W':
            return self.rooks_moved[(8, 1)]
        elif color == 'B':
            return self.rooks_moved[(8, 8)]

    def __str__(self):
        """called when object is argument to print"""

        str_ = ""

        str_ += '"rooks_moved": {\n'
        for k, v in self.rooks_moved.items():
            str_ += str(k)
            str_ += ':'
            str_ += str(v)
            str_ += '\n'
        str_ += '},\n'

        str_ += '"kings_moved": {\n'
        for k, v in self.kings_moved.items():
            str_ += str(k)
            str_ += ':'
            str_ += str(v)
            str_ += '\n'
        str_ += '},\n'

        str_ += '"pawn_histories": {\n'
        for k, v in self.pawn_histories.items():
            str_ += str(k)
            str_ += ':'
            str_ += str(v)
            str_ += '\n'
        str_ += '},\n'

        str_ += 'last_pawn_move'
        str_ += ':'
        str_ += str(self.last_pawn_move)
        str_ += ',\n'

        str_ += 'num_consecutive_non_pawn_moves'
        str_ += ':'
        str_ += str(self.num_consecutive_non_pawn_moves)
        str_ += ',\n'

        str_ += 'game_status'
        str_ += ':'
        str_ += str(self.game_status)
        str_ += ',\n'

        str_ += 'winner'
        str_ += ':'
        str_ += str(self.winner)
        str_ += ',\n'

        return str_


if __name__ == "__main__":
    board = \
        {(1, 8): 'BR1', (2, 8): '#', (3, 8): 'BB1', (4, 8): 'BQ1', (5, 8): 'BK1', (6, 8): 'BB2', (7, 8): 'BN2',
         (8, 8): 'BR2',
         (1, 7): 'BP5', (2, 7): '#', (3, 7): 'BP6', (4, 7): '#', (5, 7): '#', (6, 7): 'BP7', (7, 7): 'BP8', (8, 7): '#',
         (1, 6): '#', (2, 6): 'BP4', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): '#', (7, 6): '#', (8, 6): '#',
         (1, 5): 'BN1', (2, 5): '#', (3, 5): '#', (4, 5): 'BP1', (5, 5): 'BP2', (6, 5): '#', (7, 5): 'WP8',
         (8, 5): 'BP3',
         (1, 4): '#', (2, 4): 'WP5', (3, 4): 'WP6', (4, 4): '#', (5, 4): 'WP7', (6, 4): '#', (7, 4): '#', (8, 4): '#',
         (1, 3): 'WN2', (2, 3): '#', (3, 3): '#', (4, 3): '#', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): '#',
         (1, 2): 'WP1', (2, 2): '#', (3, 2): '#', (4, 2): 'WP2', (5, 2): '#', (6, 2): 'WP3', (7, 2): '#', (8, 2): 'WP4',
         (1, 1): 'WR1', (2, 1): '#', (3, 1): 'WB1', (4, 1): 'WQ1', (5, 1): 'WK1', (6, 1): 'WB2', (7, 1): 'WN1',
         (8, 1): 'WR2'}

    json_records = JsonRecords(
        "C:/Users/bjrat/source/repos/Python/ChessKingsCouncil/example_games/pawn_range/pawn_range.json",
        board)
    print(json_records)

    board = \
        {(1, 1): 'BQ1', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): '#', (6, 1): 'BR1', (7, 1): '#', (8, 1): '#',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 3): '#', (2, 3): '#', (3, 3): '#', (4, 3): '#', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): '#',
         (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): '#', (5, 4): '#', (6, 4): '#', (7, 4): '#', (8, 4): 'BB1',
         (1, 5): '#', (2, 5): '#', (3, 5): '#', (4, 5): '#', (5, 5): '#', (6, 5): '#', (7, 5): '#', (8, 5): '#',
         (1, 6): 'BR2', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): 'WK1', (7, 6): '#', (8, 6): '#',
         (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): 'BN1', (5, 7): 'BP1', (6, 7): '#', (7, 7): 'BP2', (8, 7): '#',
         (1, 8): '#', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): '#', (6, 8): 'BR3', (7, 8): 'BK1', (8, 8): '#'}
