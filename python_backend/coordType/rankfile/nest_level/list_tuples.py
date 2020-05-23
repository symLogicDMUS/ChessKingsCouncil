from coordType.rankfile.to_rankfile import to_rankfile


def list_tuples(json_item):
    """ """
    return list(map(lambda xy: to_rankfile(xy), json_item))
