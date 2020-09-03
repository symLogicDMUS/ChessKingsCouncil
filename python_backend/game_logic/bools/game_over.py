from game_logic.fenParser.GameStatus.g_status_types import *


def game_over(status):
    """returns true if json_records indicates the game is over, else false """
    if status == OVER:
        return True
    else:
        return False

