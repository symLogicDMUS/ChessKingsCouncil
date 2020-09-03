from pprint import pprint


def convert_offset_strs_to_pairs(offsets):
    """convert offsets from form 'x,y' to form [x,y] """
    for i in range(len(offsets)):
        offsets[i] = offsets[i].split(",")
        offsets[i][0] = int(offsets[i][0])
        offsets[i][1] = int(offsets[i][1])
    return offsets


if __name__ == "__main__":
    pprint(convert_offset_strs_to_pairs(["1,-1", "3,-2", "5,-8", "7,3"]))