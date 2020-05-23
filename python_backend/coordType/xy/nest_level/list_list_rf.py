from coordType.xy.to_xy import to_xy
from coordType.xy.nest_level.list_rf import list_rf
from pprint import pprint


def list_list_rf(json_item):
    """ """
    for i in range(len(json_item)):
        json_item[i] = list_rf(json_item[i])
    return json_item


if __name__ == "__main__":
    pprint(list_list_rf([['a7', 'a8'], ['e2', 'e1'], ['g7', 'h1']]))
