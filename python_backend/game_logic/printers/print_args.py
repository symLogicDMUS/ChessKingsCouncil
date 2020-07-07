from pprint import pprint


def print_args(*args, pp=False):
    """ """
    for arg in args:
        if pp:
            pprint(arg)
        else:
            print(arg, end="\n\n")
    print("DONE PRINTING")