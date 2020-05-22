from custom_except import *

def init_board():
    """fenParser task 6, create empty board before know where the pieces are"""
    board = {}
    for y in range(1, 9):
        for x in range(1, 9):
            board[(x,y)] = "#"

    return board

if __name__ == "__main__":
    board = init_board()
    print(board)

