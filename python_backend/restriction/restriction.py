from custom_except import *
from helpers.all_xy import all_xy


def restriction(coord_list):
    """get a restriction set from the coord_list (threat_area or pins)
    if coord_list was empty, then no restriction was found so return set of all__xy else convert coord_list to
    a set and return
    """
    if not coord_list:
        return all_xy
    else:
        return set(coord_list)
