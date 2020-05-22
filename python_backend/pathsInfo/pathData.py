from custom_except import *
class _PathData(object):
    """description of class"""
    def __init__(self, direction):
        """information about a path stemming from specific square"""
        self.direction = direction
        self.path = []
        self.coord_path = []
        self.pieces = []
        self.statuses = []
        self.piece_matches_path = []

    def auto(self, path, coord_path, pieces, statuses, piece_matches_path):
        """used for unit testing to set the lists to hard coded values"""
        self.path = path
        self.coord_path = coord_path
        self.pieces = pieces
        self.statuses = statuses
        self.piece_matches_path = piece_matches_path

    def __add__(self, other):
        if type(other) == int:
            theta = int(self.direction.replace('d', ''))
            n = theta + other
            if n >= 360:
                n = n % 360
            return str(n) + 'd'
        if type(other) == _PathData:
            theta1 = int(self.direction.replace('d', ''))
            theta2 = int(other.direction.replace('d', ''))
            n = theta1 + theta2
            if n >= 360:
                n = n % 360
            return str(n) + 'd'




    def __str__(self):
        return '==================== direction: {} ==================== \n path:{}\n coord_path:{}\n pieces:{}\n statuses:{}\n piece_can_attack:{}'\
            .format(self.direction, self.path, self.coord_path, self.pieces, self.statuses, self.piece_matches_path)