

def get_ai_color(player_type):
    """ """
    if player_type == "test":
        return None
    if player_type == "W":
        return "B"
    if player_type == "B":
        return "W"


if __name__ == "__main__":
    get_ai_color("test")