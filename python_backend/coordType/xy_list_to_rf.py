from coordType.to_rankfile import to_rankfile


def xy_list_to_rf(xy_list):
    """ """
    return list(map(lambda xy: to_rankfile(xy), xy_list))