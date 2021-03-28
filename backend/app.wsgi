import sys

sys.path.insert(0, "/var/www/html/J4stEuIPleak/")
sys.path.append('/var/www/html/J4stEuIPleak/J4stEuIPleak/venv/lib/python3.7/site-packages')

from J4stEuIPleak import app as application
application.secret_key = 'IPleak app key'