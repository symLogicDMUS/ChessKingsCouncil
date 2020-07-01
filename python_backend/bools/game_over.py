from status.g_status_types import *


def game_over(game_status):
    """returns true if json_records indicates the game is over, else false """
    if game_status == OVER:
        return True
    else:
        return False

