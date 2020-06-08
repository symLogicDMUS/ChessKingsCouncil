
class Depth:
    def __init__(self):
        """get the depth of a tuple or list"""
        self.depths = []

    def set_depths(self, item, d):
        self.depths.append(d)
        if type(item) == tuple or type(item) == list:
            for i in item:
                self.set_depths(i, d + 1)
        return

    def clear(self):
        """make sure to clear the depth list before calling get_depths again"""
        self.depths = []

    def get_max(self):
        """get the maximum depth"""
        return max(self.depths)

    def get_min(self):
        """get the minimum depth"""
        return min(self.depths)

    def get_new_depth(self, iterable):
        """get the depth of a new iterable"""
        self.clear()
        self.set_depths(iterable, 0)
        return self.get_max()


if __name__ == "__main__":
    depth = Depth()
    print(depth.get_new_depth([[((1, 2), (1, 3)), ((2, 2), (2, 3))], [((3, 4), (3, 5)), ((3, 6), (3, 7))]]))
    print(depth.get_new_depth((3, 3)))
    print(depth.get_new_depth(""))
    print(depth.get_new_depth(["Queen", "Rook", "Knight", "Bishop"]))
