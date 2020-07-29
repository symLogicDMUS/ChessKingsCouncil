from game_logic.coordType.xy.map_rf_to_xy import map_rf_to_xy
from game_logic.piece_type.get_piece_type import get_piece_type
from game_logic.JsonRecords.JsonRecordError import JsonRecordError
from game_logic.test_objects.sample_board_dicts import sample_board_dicts
import json


class JsonRecords(object):
    """contains info for new or saved game relevant to performing a castle or en_passant"""

    def __init__(self, file, board, j_records=None):
        """new instance of object created for every update to piece final_ranges i.e. @app.update()
        consider seperating status, condition, and winner into seperate status object.
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

        if j_records is None:
            self._init_pawn_ids(board, file=file)

    def _init_pawn_ids(self, board, file=""):
        """exchange the sqr that pawn started the game with, with the id for that pawn"""
        pawn_histories = {}
        for hist in self.pawn_histories.values():
            sqr1 = hist[-1]
            id_ = board[sqr1]
            pawn_histories[id_] = hist
            if get_piece_type(id_) != 'P':
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

    def update(self, id_, start, dest, promo_flag):
        """update json records depending on the piece type of id_ at location start"""
        p_type = get_piece_type(id_)
        if p_type != "P":
            self.num_consecutive_non_pawn_moves += 1
            if p_type == 'R' and start in self.rooks_moved.keys():
                self.update_rooks_moved(start)
            elif p_type == 'K' and start in self.kings_moved.keys():
                self.update_kings_moved(start)
        else:
            self.reset_non_pawn_moves()
            self.last_pawn_move = dest
            self.update_pawn_history(id_, dest, promo_flag)
        return

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
                'num_consecutive_non_pawn_moves': self.num_consecutive_non_pawn_moves}

    def reset_non_pawn_moves(self):
        """ a pawn has just moved, so reset number of consecutive non pawn moves to 0"""
        self.num_consecutive_non_pawn_moves = 0

    def delete_pawn(self, id_):
        """delete pawn with id from pawn histories"""
        del self.pawn_histories[id_]

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

        return str_


if __name__ == "__main__":
    board = sample_board_dicts['pawn_range']
    json_records = JsonRecords("../../example_games/pawn_range/pawn_range.json", board)
    print(json_records)

