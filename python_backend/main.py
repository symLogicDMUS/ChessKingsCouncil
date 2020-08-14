import firebase_admin
from firebase_admin import credentials, firestore
from flask_helpers.new_data import new_data
from game_logic.test_objects.sample_board_dicts import sample_board_dicts
from sample_def import def_, json_records


cred = credentials.Certificate('./chess-king-council-firebase-adminsdk-e8l0k-2f2c082fe2.json')
default_app = firebase_admin.initialize_app(cred)
db = firestore.client()

data = new_data(sample_board_dicts['new'], 'W', 'B', def_, json_records)
ranges = data['ranges']
moves = data['moves']

