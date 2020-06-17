from sqr_case.get_sqr_case import get_sqr_case
from sqr_case.sqr_cases import *


def filter_init_jumps(jumps, board, color):
    """ """
    return list(filter(lambda j: get_sqr_case(board, j[0], j[1], color) != OOB
                          and get_sqr_case(board, j[0], j[1], color) != FRIEND,
                jumps))
