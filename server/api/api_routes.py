from flask import Blueprint, jsonify
import requests

api = Blueprint('api', __name__)

@api.route('/')
def hello_world():
    return jsonify({'message': 'Just to make sure that the backend is working'})
