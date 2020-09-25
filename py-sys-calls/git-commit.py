import os

#  this file assumes being run from the directory 'py-sys-calls' in the root of git repo


def git_commit(file_paths):
    """commit files in list to git"""
    for file_path in file_paths:
        os.system("git commit -m 'adding new file' {}".format(file_path))


if __name__ == "__main__":
    file_paths = [

    ]
    git_commit(file_paths)