import os
from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='client/build', static_url_path='')

import le_new_blog.api

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(
        os.path.join(app.root_path, 'client', 'build'),
        'favicon.ico', mimetype='image/vnd.microsoft.icon'
    )

@app.route('/edit/<id>')
@app.route('/new')
@app.route('/')
def index(id=None):
    return send_from_directory(
        os.path.join(app.root_path, 'client', 'build'),
        'index.html'
    )
