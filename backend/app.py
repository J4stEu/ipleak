from flask import Flask
from config import Configuration
from flask_cors import CORS

application = Flask(__name__, static_folder='assets', template_folder='frontendEngine')

application.config.from_object(Configuration)

CORS(application)
cors = CORS(application, resources={r"/api/*": {"origins": "*"}})