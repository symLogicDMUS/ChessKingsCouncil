def remove_captured(init_ranges, pins, mt_restricts, final_ranges, captured):
    """remove the records of any piece that was captured"""
    if captured != 'None':
        del init_ranges[captured]
        del pins[captured]
        del mt_restricts[captured]
        del final_ranges[captured]
    return init_ranges, pins, mt_restricts, final_ranges


if __name__ == "__main__":
    pass # TODO: implement test
