from api_helpers.id_assign_.rent_ids import rent_ids
from api_helpers.id_assign_.get_standard_ids import get_standard_ids
from api_helpers.id_assign_.sub_ids import sub_ids
from pprint import pprint


def id_assign(custom_piece_names, subs):
    """
    assign custom piece names to standard piece ids, therefore "subbing" for those standard pieces. Standard ids not subed
    for keep their standard piece assignments. For custom pieces not subed but that are pawn promotion options, rent from
    1 of 20 non-standard ids.
    """
    id_dict = sub_ids(subs)
    id_dict = rent_ids(id_dict, custom_piece_names, ignore=subs.keys())  # "ignore" subs because just did that
    id_dict.update(get_standard_ids(exclude=subs.values()))  # get ids the of standard pieces not subbing for.

    return id_dict


if __name__ == "__main__":
    pprint(id_assign(['Jester',
                      'Duke',
                      'Joker',
                      'Morty'],
                     {'Jester': 'Queen', 'Duke': 'Bishop'}))
