from flask import current_app, request, session
from typing import Generator
import csv
import itertools
import uuid


reports = {}


def create_file_generator() -> Generator:
    with open(current_app.config['FILE_NAME'], newline='') as csvfile:
        reader = csv.reader(csvfile)
        while True:
            chunk = list(itertools.islice(reader, current_app.config['FILE_CHUNK_SIZE']))
            yield chunk


def get_chunk():
    if request.args.get('get_next') is None or 'session_uuid' not in session or session['session_uuid'] not in reports:
        session['session_uuid'] = uuid.uuid4()
        reports[session['session_uuid']] = create_file_generator()

    return next(reports[session['session_uuid']])
