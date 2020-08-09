def add_digit_to_id(pos_list):
    """fenParser task 5, add a digit to each id in the pos_list. the digit is what number occurence of that id"""

    id_counters = {}

    for i in range(len(pos_list)):
        if pos_list[i] != '#':
            if pos_list[i] in id_counters.keys():
                id_counters[pos_list[i]] += 1
            else:
                id_counters[pos_list[i]] = 1
            pos_list[i] = pos_list[i] + str(id_counters[pos_list[i]])
    return pos_list


if __name__ == "__main__":
    # test 1
    print("test 1:")
    pos_list = add_digit_to_id(['WR', 'WN', 'WB', 'WQ', 'WC', 'WV', 'WN', 'WR', 'WP',
                                'WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP', '#', '#',
                                '#', '#', '#', '#', '#', '#', '#', '#', '#', '#',
                                '#', '#', '#', '#', '#', '#', '#', '#', '#', '#',
                                '#', '#', '#', '#', '#', '#', '#', '#', '#', '#',
                                'BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP',
                                'BR', 'BN', 'BB', 'BQ', 'BK', 'BB', 'BN', 'BR']
                               )
    print(pos_list)
    print("\n")

    # test 2:
    print("test 2:")
    pos_list = add_digit_to_id(['#', 'WR', 'WB', 'WR', 'WK', '#', '#', '#', '#',
                                '#', '#', '#', '#', '#', '#', '#', 'WR', 'WN', 'WB',
                                'WQ', '#', 'WB', 'WN', 'WR', '#', '#', '#', '#', '#',
                                '#', '#', '#', 'BR', 'BN', 'BB', 'BQ', '#', 'BB', 'BN',
                                'BR', '#', '#', '#', 'BK', '#', '#', '#', '#', '#', '#',
                                '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#',
                                '#', '#', '#'])
    print(pos_list)
    print("\n")

    # test 3:
    print("test 3:")

    pos_list = add_digit_to_id(['BB', '#', '#', 'BQ', '#', '#', 'BQ', '#',
                                '#', '#', '#', 'WR', '#', 'WR', '#', '#',
                                '#', '#', 'WN', 'WP', '#', '#', '#', '#',
                                'BQ', '#', 'WQ', 'WK', '#', 'WQ', 'WB', 'BR',
                                '#', '#', '#', '#', '#', '#', '#', '#',
                                '#', '#', '#', 'WP', '#', 'WP', '#', '#',
                                'BQ', '#', '#', 'BR', '#', '#', 'WP', '#',
                                '#', '#', '#', 'BK', '#', '#', '#', 'BB'])
    print(pos_list)
    print("\n")
