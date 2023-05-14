import os
from flask import Flask, redirect, render_template, request, url_for
import pandas as pd

ALLOWED_EXTENSIONS = ["xls", "xlsx"]

app = Flask(__name__, template_folder="templates", static_folder="static")
app.config['UPLOAD_FOLDER'] = os.path.join(os.getcwd(), 'uploads')

if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])

@app.route("/")
def home():
    return render_template("index.html")

@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['input_file']
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(file_path)
    message = f"{file.filename} uploaded"
    return render_template('index.html', message=message)

@app.route("/calculate", methods=["POST"])
def calculate():
    model_function = request.form["model-function"]
    # Model fonksiyonunu burada işleyebilir ve kullanabilirsiniz
    return "Model function submitted: " + model_function

if __name__ == "__main__":
    app.run(port=8000)
