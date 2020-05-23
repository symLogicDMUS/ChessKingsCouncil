from coordType.xy.to_xy import to_xy
from pprint import pprint


def list_rf(json_item):
    """ """
    return list(map(lambda rf: to_xy(rf), json_item))


if __name__ == "__main__":
    pprint(list_rf(['e2', 'e4']))
