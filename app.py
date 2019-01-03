import os
import sys

from flask import Flask
from flask import render_template
from flask import request
app = Flask(__name__)

@app.run(host='0.0.0.0')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/terminal_query', methods=['POST', 'GET'])
def terminal_query():
    query = request.form['query']
    print('got query: "%s"' % (query))

    val = ''
    if query == 'test':
        val = 'test sucessfull'
    else:
        val = 'error unknown command'

    return val