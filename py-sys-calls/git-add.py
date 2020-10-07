import os

#  this file assumes being run from the root of a git repo


def git_add(file_paths):
    """add list of untracked files to git"""
    for file_path in file_paths:
        os.system("git add {}".format(file_path))


if __name__ == "__main__":
    file_paths = [

    ]
    git_add(file_paths)
    