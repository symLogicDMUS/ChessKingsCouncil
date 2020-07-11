# def handle_exception(ex_type, ex_info, tb):
#     my_paths = get_my_paths()
#     s_sum = traceback.extract_tb(tb)
#     for s in s_sum:
#         if s.filename in my_paths:
#             f = os.path.relpath(s.filename)
#             print("File ", f)
#             print("    Line {}, {}".format(s.lineno, s._line))
#             print("    Error:{}".format(ex_info))


# sys.excepthook = handle_exception


if __name__ == "__main__":
    a = [1, 2, 3]
    b = a[3]
