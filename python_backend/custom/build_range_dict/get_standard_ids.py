from custom.build_range_dict.standard_ids import _standard_ids


def get_standard_ids(exclude=[]):
    """the dict in standard_ids.py has key the name of piece, and value the id of piece.
       Reverse this definition and return dict with key the id and value the name. filter
       out names of any standard pieces being substituted by custom pieces
    """
    standard_ids = {}
    for name, id_ in _standard_ids.items():
        if name in exclude:
            continue
        standard_ids[id_] = name
    return standard_ids
