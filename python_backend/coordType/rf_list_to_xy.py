from coordType.to_xy import to_xy


def rf_list_to_xy(rf_list):
    """ """
    return list(map(lambda rf: to_xy(rf), rf_list))