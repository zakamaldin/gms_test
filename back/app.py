from flask import Flask, render_template
from flask_cors import CORS
from back.api.api import api as api_bp
import pathlib

app = Flask(__name__)
CORS(app)
app.config['FILE_NAME'] = pathlib.Path(__file__).parent.absolute() / 'police-department-calls-for-service.csv'
app.config['SECRET_KEY'] = 'QWE'
app.config['FILE_CHUNK_SIZE'] = 20
app.register_blueprint(api_bp, url_prefix='/api')

@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run()