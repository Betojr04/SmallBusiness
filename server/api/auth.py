from flask import Blueprint, jsonify, request
from api.models import User, db
import json
import requests
import hashlib
from flask_jwt_extended import create_access_token, JWTManager, jwt_required, get_jwt_identity

auth = Blueprint('auth', __name__)

@auth.route('/register', methods=['POST'])
def create_new_user():
    data = request.get_json()
    
    first_name = data['first_name']    
    last_name = data['last_name']
    email = data['email']
    password = data['password']
    
    if not first_name:
        return jsonify({"msg": "First name is required"}), 400
    
    if not last_name:
        return jsonify({"msg": "Last name is required"}), 400
    
    if not email:
        return jsonify({"msg": "Email is required"}), 400
    
    if not password:
        return jsonify({"msg": "Password is required"}), 400
    
    if User.query.filter_by(email=email).first():
        return jsonify({"msg": "Email already exists"}), 400
    
    password = hashlib.sha256(password.encode('utf-8')).hexdigest()
    
    user = User(first_name=first_name, last_name=last_name, email=email, password=password)
    
    db.session.add(user)
    db.session.commit()
    
    access_token = create_access_token(identity=email)
    
    return jsonify({"msg": "User created successfully"}), 200
    
    
    