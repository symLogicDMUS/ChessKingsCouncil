def fifty_move_draw(hm_clock, json_records, default=False):
    """ """
    if hm_clock >= 50:
        if default:
            json_records.winner = "-"
            json_records.status = OVER
            return json_records, True
        yn = input("There has been 50 moves without a capture on pawn advance. would you like to claim a draw? (Y/N) ")
        if yn == 'Y':
            json_records.winner = "-"
            json_records.status = OVER
            return json_records, True
        elif yn == 'N':
            return json_records, False
        else:
            print("not valid. select Y or N.")
            return fifty_move_draw(hm_clock)
    else:
        return json_records, False
