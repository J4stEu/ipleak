from flask import Flask
from config import Configuration
#from flask_cors import CORS

#application = Flask(__name__, static_folder='static/assets', template_folder='static/frontendEngine')
app = Flask(__name__, static_folder='static/assets', template_folder='static/frontEndEngine')
app.config.from_object(Configuration)

#CORS(application)
#cors = CORS(application, resources={r"/api/*": {"origins": "*"}})