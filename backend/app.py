from flask import Flask
from config import Configuration
from flask_cors import CORS

application = Flask(__name__, static_folder='static/shared_assets', template_folder='static/engs_frontendEngine')

application.config.from_object(Configuration)

CORS(application)
cors = CORS(application, resources={r"/api/*": {"origins": "*"}})