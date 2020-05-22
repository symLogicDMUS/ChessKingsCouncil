
from flask import Blueprint, jsonify

main = Blueprint('main', __name__)


@main.route('./add_movie', methods=['POST'])
def add_movie():
    return 'Done', 201


@main.route('./movies')
def movies():
    movies_ = []
    return jsonify({'movies': movies_})
