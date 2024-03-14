from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

db = SQLAlchemy()
migrate = Migrate()


def create_app():
    app = Flask(__name__)
    
    app.config.from_object('api.config.Config')
    
    db.init_app(app)
    migrate.init_app(app, db)
    CORS(app)
    
    from . import api_routes
    
    app.register_blueprint(api_routes.api)
    
    return app