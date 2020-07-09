from game_logic.ranges.specialMoves.SpecialMoves import SpecialMoves
from game_logic.printers.print_board import print_board
from game_logic.movePiece.ply import ply
from game_logic.movePiece.castle_move import castle_move
from game_logic.movePiece.en_passant_move import en_passant_move
from game_logic.test_objects.sample_board_dicts import sample_board_dicts


def move(board, start, dest, color, special_moves):
    """ function to move a piece on board from start to dest """
    board, captured = ply(board, start, dest)
    board, captured = castle_move(board, start, dest, special_moves)
    board, captured = en_passant_move(board, start, dest, color, special_moves)

    return board, captured


if __name__ == "__main__":

    board = sample_board_dicts['check_example3']
    special_moves = SpecialMoves()

    print_board(board, heading="before:")
    board, captured = move(board, (4, 1), (4, 2), 'W', special_moves)
    print_board(board, heading="after:")
    print(board[(4, 2)] == 'BQ1')
    print(board[(4, 1)] == '#')

    print_board(board, heading="before:")
    board, captured = move(board, (1, 1), (3, 3), 'W', special_moves)
    print_board(board, heading="after:")
    print(board[(3, 3)] == 'BB1')
    print(board[(1, 1)] == '#')
    print('\n')

    print_board(board, heading="before:")
    board, captured = move(board, (6, 6), (6, 7), 'W', special_moves)
    print_board(board, heading="after:")
    print(board[(6, 7)] == 'WP3')
    print(board[(6, 6)] == '#')
    print_board(board, heading="before:")
    print('\n')

    print(" ---------- test 1. castle_test3, queen side: ------------ ")
    print('COLOR W')
    board = sample_board_dicts['castle_test3']
    special_moves = SpecialMoves()
    special_moves.castles = [((5, 1), (7, 1)), ((5, 1), (3, 1))]
    board, captured = move(board, (5, 1), (3, 1), 'W', special_moves)
    print_board(board, heading="before:")
    print_board(board)
    print_board(board, heading="after:")
    print('COLOR B')
    board = sample_board_dicts['castle_test3']
    special_moves = SpecialMoves()
    special_moves.castles = [((5, 8), (7, 8)), ((5, 8), (3, 8))]
    print_board(board, heading="before:")
    board, captured = move(board, (5, 8), (3, 8), 'B', special_moves)
    print_board(board, heading="after:")
    print("----------- test 2, castle_test3, king side: -----------")
    print('COLOR W')
    board = sample_board_dicts['castle_test3']
    special_moves = SpecialMoves()
    special_moves.castles = [((5, 1), (7, 1)), ((5, 1), (3, 1))]
    print_board(board, heading="before:")
    board, captured = move(board, (5, 1), (7, 1), 'W', special_moves)
    print_board(board, heading="after:")
    print('COLOR B')
    board = sample_board_dicts['castle_test3']
    special_moves = SpecialMoves()
    special_moves.castles = [((5, 8), (7, 8)), ((5, 8), (3, 8))]
    print_board(board, heading="before:")
    board, captured = move(board, (5, 8), (7, 8), 'B', special_moves)
    print_board(board, heading="after:")
    print("---------- en-passant test: ----------")
    board = sample_board_dicts['enpassant_test1']
    special_moves = SpecialMoves()
    special_moves.en_passant = [((3, 5), (2, 6))]
    print_board(board, heading="before:")
    board, ranges_ = move(board, (3, 5), (2, 6), 'W', special_moves)
    print_board(board, heading="after:")