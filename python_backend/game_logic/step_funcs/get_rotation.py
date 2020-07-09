import re
from game_logic.step_funcs.step_funcs import step_func_dict


def get_rotation(step_func_name, rotation_angle):
    """get the step function that is a rotation of angle1 from step_func_name"""
    step_func_angle = int(re.fullmatch('step_1sqr(\d+)d', step_func_name).group(1))
    new_angle = step_func_angle + rotation_angle
    if new_angle >= 360:
        new_angle = new_angle - 360
    step_func_name = "step_1sqr{}d".format(new_angle)
    step_func = step_func_dict[step_func_name]
    return step_func


if __name__ == "__main__":

    for step_func_name in ["step_1sqr90d", "step_1sqr45d", "step_1sqr0d", "step_1sqr315d", "step_1sqr270d",
                           "step_1sqr225d", "step_1sqr180d", "step_1sqr135d"]:
        print(get_rotation(step_func_name, 180))