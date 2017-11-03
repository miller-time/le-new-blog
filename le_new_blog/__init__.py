import os
from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='client/build', static_url_path='')

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(
        os.path.join(app.root_path, 'static'),
        'favicon.ico', mimetype='image/vnd.microsoft.icon'
    )

@app.route('/')
def index():
    return send_from_directory(
        os.path.join(app.root_path, 'client', 'build'),
        'index.html'
    )
