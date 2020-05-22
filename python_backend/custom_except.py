
from filepath import get_my_paths
import traceback
import json
import sys
import os


my_paths = get_my_paths()


def handle_exception(ex_type, ex_info, tb):
    s_sum = traceback.extract_tb(tb)
    for s in s_sum:
        if s.filename in my_paths:
            f = os.path.relpath(s.filename)
            print("File ", f)
            print("    Line {}, {}".format(s.lineno, s._line))


sys.excepthook = handle_exception


if __name__ == "__main__":
    a = [1, 2, 3]
    b = a[3]
