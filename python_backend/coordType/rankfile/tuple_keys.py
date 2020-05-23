from coordType.rankfile.nest_level.tuple_ import tuple_
from coordType.rankfile.to_rankfile import to_rankfile


def tuple_keys(json_item):
    """ """
    new_item = {}
    for k in json_item.keys():
        new_item[to_rankfile(k)] = json_item[k]
    return new_item


if __name__ == "__main__":
    pass  # TODO: implement test
