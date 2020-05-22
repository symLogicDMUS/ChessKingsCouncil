from custom_except import *
from coordType.to_rankfile import to_rankfile


def convert_dict_lists(dict_):
    """convert the list items to rankfiles when the values of a dict are lists"""
    for k in dict_.keys():
        for i in range(len(dict_[k])):
            dict_[k][i] = to_rankfile(dict_[k][i])
    return dict_