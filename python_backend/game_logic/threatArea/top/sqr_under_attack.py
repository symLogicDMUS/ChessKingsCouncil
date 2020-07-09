from game_logic.threatArea.top.get_threat_area import get_threat_area
from game_logic.threatArea.get_king_threats import get_king_threats
from game_logic.printers.print_board import print_board
from game_logic.test_objects.get_standard_range_defs import get_standard_range_defs
from game_logic.test_objects.get_standard_id_dict import get_standard_id_dict
from game_logic.test_objects.hypo_board_samples import hypo_board_samples
from game_logic.test_objects.sample_board_dicts import sample_board_dicts
from itertools import filterfalse


def sqr_under_attack(board, sqr, color, range_defs, id_dict):
    """return True if square is under attack, else False """
    threat_area = get_threat_area(board, sqr, color, range_defs, id_dict)
    king_threats = get_king_threats(board, sqr, color)
    threat_area.extend(king_threats)
    if len(threat_area) > 0:
        return True
    else:
        return False


if __name__ == "__main__":

    range_defs = get_standard_range_defs()
    id_dict = get_standard_id_dict()

    board = sample_board_dicts['fundemental_defense']
    results = {}
    for y in range(1, 9):
        for x in range(1, 9):
            results[(x, y)] = sqr_under_attack(board, (x, y), 'W', range_defs, id_dict)
    under_attack = list(filter(lambda sqr: results[sqr], results.keys()))
    not_under_attack = list(filterfalse(lambda sqr: results[sqr], results.keys()))
    print_board(board, heading="test 1, under attack by W:", highlights=under_attack, highlights3=not_under_attack)
    results = {}
    for y in range(1, 9):
        for x in range(1, 9):
            results[(x, y)] = sqr_under_attack(board, (x, y), 'B', range_defs, id_dict)
    under_attack = list(filter(lambda sqr: results[sqr], results.keys()))
    not_under_attack = list(filterfalse(lambda sqr: results[sqr], results.keys()))
    print_board(board, heading='test 2, under attack by black B:', highlights=under_attack, highlights3=not_under_attack)
    
    board = sample_board_dicts['super_checkmate_impossible_example']
    threats = []
    for sqr in [(5, 5), (6, 5), (7, 5), (5, 6), (7, 6), (5, 7), (6, 7), (7, 7)]:
        if sqr_under_attack(board, sqr, 'W', range_defs, id_dict):
            threats.append(sqr)
    print_board(board, heading="super_checkmate_impossible_example", highlights=threats)

    hypo_boards = hypo_board_samples['super_checkmate_impossible_example']
    for hypo_k_loc, hypo_board in hypo_boards.items():
        if sqr_under_attack(hypo_board, hypo_k_loc, 'W', range_defs, id_dict):
            print_board(hypo_board, highlights=[hypo_k_loc], highlights4=[(6, 6)])
        else:
            print_board(hypo_board, highlights3=[hypo_k_loc], highlights4=[(6, 6)])