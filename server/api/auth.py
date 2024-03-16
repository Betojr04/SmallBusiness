from flask import Blueprint, jsonify, request
import json
import requests
import hashlib
from flask_jwt_extended import create_access_token, JWTManager, jwt_required, get_jwt_identity

auth = Blueprint('auth', __name__)

@auth.route('/register', methods=['POST'])
def create_new_user():
    data = request.get_data()
    json_data = json_data.get(data)
    
    
    