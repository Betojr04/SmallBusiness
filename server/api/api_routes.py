from flask import Blueprint, jsonify
import requests

api = Blueprint('api', __name__)

@api.route('/')
def hello_world():
    return jsonify({'message': 'Just to make sure that the backend is working'})


@api.route('/featured-products', methods=['GET'])
def featured_products():
    try:
        response = requests.get('https://fakestoreapi.com/products?limit=3')
        response.raise_for_status()
        
        
        return jsonify(response.json())
    except requests.exceptions.RequestException as e:
        return jsonify({'error': str(e)}), 500
    
    
