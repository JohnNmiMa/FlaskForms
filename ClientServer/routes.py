#!/usr/local/bin/python
from flask import Flask, render_template

app = Flask(__name__)      

@app.route('/')
def home():
    return render_template('signup_form.html')

@app.route('/home', methods=['POST'])
def results():
    return render_template('home.html')
 
if __name__ == '__main__':
    app.run(debug=True)
