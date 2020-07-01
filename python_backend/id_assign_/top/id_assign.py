from id_assign_.sub_ids import sub_ids
from id_assign_.rent_ids import rent_ids
from id_assign_.get_standard_ids import get_standard_ids
from pprint import pprint


def id_assign(custom_piece_names, subs):
    """
    """
    id_dict = sub_ids(subs)
    id_dict = rent_ids(id_dict, custom_piece_names, ignore=subs.keys())  # ignore because taken care of previous step.
    id_dict.update(get_standard_ids(exclude=subs.values())) # exclude standard pieces subed for.
    return id_dict


if __name__ == "__main__":
    pprint(id_assign(['Jester',
                      'Duke',
                      'Joker',
                      'Morty'],
                     {'Jester': 'Queen', 'Duke': 'Bishop'}))
