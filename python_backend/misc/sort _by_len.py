
from pprint import pprint


def sort_by_len(strings):
    """ """
    strings = sorted(strings, key=len)
    strings.reverse()
    return strings


if __name__ == "__main__":
    strings_ = \
        [
            'from main.get_data import get_data',
            'from main.get_pathdata_dict import get_pathdata_dict',
            'from main.get_ranges import get_ranges',
            'from main.get_piece_dicts import get_piece_dicts',
            'from main.get_king_locs import get_king_locs',
            'from main.get_threat_area import get_threat_area',
            'from main.get_num_pieces_checking_king import get_num_pieces_checking_king',
            'from main.get_pins import get_pins',
            'from main.get_multithreat_restriction import get_multithreat_restriction',
            'from main.get_final_ranges import get_final_ranges',
            'from main.attempt_move import attempt_move',
            'from main.remove_captured import remove_captured',
            'from is_piece import is_piece',
            'from get_color import get_color',
            'from get_unicode_board import get_unicode_board',
            'import copy',
            'import os',
            'from termcolor import colored']
    strings_ = sort_by_len(strings_)
    pprint(strings_)
