from custom_except import *
from getters.get_piece_type import get_piece_type
from ranges.get_range_func import get_range_func
from ranges.specialMoves.SpecialMoves import SpecialMoves
from JsonRecords.JsonRecords import JsonRecords
from getters.get_piece_dicts import get_piece_dicts
from getters.get_board import get_board
from getters.get_color import get_color
from getters.get_unicode_board import get_unicode_board
from printers.print_sqr_highlights import print_sqr_highlights


def get_ranges(board, color, ranges, json_records):
    """get the range of every piece on board of specific color, including special moves"""
    special_moves = SpecialMoves()
    for sqr, id in board.items():
        if id == '#':
            continue
        if get_color(id) != color:
            continue
        piece_type = get_piece_type(id)
        get_range = get_range_func(piece_type)
        if piece_type == 'Pawn':
            piece_range, special_moves = get_range(sqr, board, color, json_records, special_moves)
            ranges[id].extend(piece_range)
        elif piece_type == 'King':
            piece_range, special_moves = get_range(sqr, board, color, json_records, special_moves)
            ranges[id].extend(piece_range)
        else:
            piece_range = get_range(sqr, board, color)
            ranges[id].extend(piece_range)

    return ranges, special_moves


if __name__ == "__main__":
    def test_func(test_num, test_name, fen):
        print('{}, {}'.format(test_num, test_name))
        board = get_board(fen)
        init_ranges, pins, mt_res, final_ranges = get_piece_dicts(board)
        json_records = JsonRecords(
            "C:/Users/bjrat/source/repos/Python/ChessKingsCouncil/saved_games/{}/{}.json".format(test_name, test_name),
            board)
        print('\n')
        ranges1, special_moves1 = get_ranges(board, 'W', init_ranges, json_records)
        ranges2, special_moves2 = get_ranges(board, 'B', init_ranges, json_records)
        ranges1.update_state(ranges2)
        special_moves1.en_passant.extend(special_moves2.en_passant)
        special_moves1.castles.extend(special_moves2.castles)
        special_moves1.promos.extend(special_moves2.promos)
        uni_board = get_unicode_board(board)
        for id_ in ranges1.keys():
            print(id_)
            print_sqr_highlights(uni_board, ranges1[id_], 'red')
        print_sqr_highlights(uni_board, special_moves1.get_castles(), 'red', heading="castles:")
        print_sqr_highlights(uni_board, special_moves1.get_en_passant(), 'red', heading="en-passants")
        print_sqr_highlights(uni_board, special_moves1.get_promos(), 'red', heading="pawn promotions:")
        print('\n')
        print('...............................................................\n')

    test_func('test #2', 'castle_test3', "r3k2r/3q4/2nbbn2/pppppppp/PPPPPPPP/2NBBN2/3Q4/R3K2R w KQkq - 8 13")
    test_func('test #3', 'enpassant_test1', "rnbqkb1r/p1pppppp/5n2/1pP5/8/8/PP1PPPPP/RNBQKBNR w KQkq b6 0 3")
    test_func('test #4', 'castle_test1', "r3k2r/1P6/5P2/p3n2p/3b1BpP/NBQb1q2/8/R3K2R w KQkq - 1 25")
    test_func('test #5', 'castle_test2', "1q2k3/8/8/8/8/8/8/R3K2R w K - 0 1")
    test_func('test #6', '_initialBoard', "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
