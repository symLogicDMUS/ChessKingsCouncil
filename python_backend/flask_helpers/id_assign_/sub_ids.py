from pprint import pprint
from flask_helpers.id_assign_.standard_ids import _standard_ids


def sub_ids(subs):
    """replace any of Bishop Knight or Queen in the game by assigning its id to the name of a assign_ids piece """
    id_dict = {}
    for s in subs.keys():
        id_ = _standard_ids[subs[s]]
        id_dict[id_] = s
    return id_dict


if __name__ == "__main__":
    pprint(sub_ids({'Jester': 'Queen', 'Duke': 'Bishop'}))