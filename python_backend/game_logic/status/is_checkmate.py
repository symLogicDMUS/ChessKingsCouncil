from flask_helpers.filter_empy_ranges import filter_empty_ranges


def is_checkmate(ranges):
    if filter_empty_ranges(ranges) == {}:
        return True
    else:
        return False
