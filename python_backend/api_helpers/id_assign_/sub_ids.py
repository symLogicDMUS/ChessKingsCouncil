from pprint import pprint
from api_helpers.id_assign_.standard_ids import _standard_ids


def sub_ids(subs):
    """replace any of Bishop Knight or Queen in the game by assigning its id to the name of a custom piece.
       assign standard ids to custom piece names, resulting in a dict of form "standard_id":"custom_piece_name"
    """
    id_dict = {}
    for custom_piece_name in subs.keys():
        standard_piece_name = subs[custom_piece_name]
        standard_id = _standard_ids[standard_piece_name]
        id_dict[standard_id] = custom_piece_name
    return id_dict


if __name__ == "__main__":
    pprint(sub_ids({'Jester': 'Queen', 'Duke': 'Bishop'}))