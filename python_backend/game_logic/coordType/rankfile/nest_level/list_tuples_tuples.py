from game_logic.coordType.rankfile.to_rankfile import to_rankfile
from pprint import pprint


def list_tuples_tuples(json_item):
    """ """
    json_item = list(map(lambda move: list(move), json_item))
    json_item = list(map(lambda move: [to_rankfile(move[0]), to_rankfile(move[1])], json_item))
    return json_item


if __name__ == "__main__":
    pprint(list_tuples_tuples([((3, 2), (3, 1)), ((3, 2), (4, 1))]))
