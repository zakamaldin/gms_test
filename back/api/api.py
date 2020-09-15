from flask import Blueprint
from .utils import get_chunk
import json

api = Blueprint('api', __name__)


@api.route('/police_report')
def police_report():
    return json.dumps(get_chunk())
