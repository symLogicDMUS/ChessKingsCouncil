from api_helpers.id_assign_.standard_ids import _standard_ids


def get_standard_ids(exclude=[]):
    """the dict in standard_ids.py has key the name of piece, and value the id of piece.
       Reverse this definition and return dict with key the id and value the name. filter
       out names of any standard pieces being substituted by assign_ids pieces
    """
    standard_ids = {}
    names = list(filter(lambda name: name not in exclude, _standard_ids.keys()))
    for name, id_ in _standard_ids.items():
        if name in names:
            standard_ids[id_] = name
    return standard_ids
