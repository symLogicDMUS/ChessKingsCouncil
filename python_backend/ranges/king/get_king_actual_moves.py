from threatArea.top.sqr_under_attack import sqr_under_attack
from getters.get_temp_boards import get_temp_boards
from fenParser.getBoard.top.get_board import get_board
from threatArea.get_king_loc import get_king_loc
from ranges.king.get_king_initial_moves import get_king_initial_moves
from printers.print_board import print_board
from termcolor import colored


def get_king_actual_moves(board, king_loc, init_range, color):
    """filter the king's initial moves to get the actual ones"""
    boards = get_temp_boards(board, king_loc, init_range, color)
    return list(filter(lambda sqr: not sqr_under_attack(sqr, boards[sqr], color), boards.keys()))


if __name__ == "__main__":

    f = open("../saved_games/dummy_game/dummy_game.fen")
    print(colored("dummy_game", 'red'))
    fen = f.readline()
    board = get_board(fen)
    # W:
    king_loc = get_king_loc(board, 'W')
    init_range = get_king_initial_moves(board, king_loc, 'W')
    final_range = get_king_actual_moves(board, king_loc, init_range, 'W')
    print_board(board, heading='W', highlights=final_range)
    # B:
    king_loc = get_king_loc(board, 'B')
    init_range = get_king_initial_moves(board, king_loc, 'B')
    final_range = get_king_actual_moves(board, king_loc, init_range, 'B')
    print_board(board, heading='W', highlights=final_range)

    # for game_name in os.listdir("../example_games"):
    #     f = open("../example_games/{}/{}.fen".format(game_name, game_name))
    #     print(colored(game_name, 'red'))
    #     fen = f.readline()
    #     board = get_board(fen)
    #     # W:
    #     king_loc = get_king_loc(board, 'W')
    #     init_range = get_king_initial_moves(board, king_loc, 'W')
    #     final_range = get_king_actual_moves(board, king_loc, init_range, 'W')
    #     print_board(board, heading='W', highlights=final_range)
    #     # B:
    #     king_loc = get_king_loc(board, 'B')
    #     init_range = get_king_initial_moves(board, king_loc, 'B')
    #     final_range = get_king_actual_moves(board, king_loc, init_range, 'B')
    #     print_board(board, heading='W', highlights=final_range)

