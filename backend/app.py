from flask import Flask, request
from flask_cors import CORS
from werkzeug.exceptions import BadRequestKeyError
from rapid_latex_ocr import LatexOCR
from PIL import Image
import os
import tempfile
import numpy as np
import openai
import easyocr
from keys import OPENAI_API_KEY



app = Flask(__name__)
CORS(app)
model = LatexOCR()
reader = easyocr.Reader(['en'])

openai.api_key = OPENAI_API_KEY

@app.route('/convert', methods=['POST'])
def convert_image():
    try:
        image = request.files['image']
    except BadRequestKeyError:
        return "Image not found in request", 400

    temp_file = tempfile.NamedTemporaryFile(delete=False)
    image.save(temp_file.name)

    with Image.open(temp_file.name) as img:
        data = np.array(img.convert('RGB'))

    res, elapse = model(data)
    temp_file.close()  
    os.remove(temp_file.name)

    # Use the OCR result as a prompt for the GPT-3 model
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant who solves math problems step by step with explanation in a simple manor  ."},
            {"role": "user", "content": res}
        ]
    )

    # Return the GPT-3 model's response
    return completion.choices[0].message['content']


@app.route('/convert/subjective', methods=['POST'])
def easyocr_convert_image():
    try:
        image = request.files['image']
    except BadRequestKeyError:
        return "Image not found in request", 400

    temp_file = tempfile.NamedTemporaryFile(delete=False)
    image.save(temp_file.name)

    res = reader.readtext(temp_file.name)
    temp_file.close()  
    os.remove(temp_file.name)

    # Use the OCR result as a prompt for the GPT-3 model
    text = ' '.join([item[1] for item in res])
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant. who provides short and simple explanation to questions or topics asked going over all relevent points of the topic .these answers are always suitable to be written in tests and exams"},
            {"role": "user", "content": text}
        ]
    )

    # Return the GPT-3 model's response
    return completion.choices[0].message['content']


@app.route('/', methods=['GET'])
def home():
    return "api chall ra , go to postman"

if __name__ == '__main__':
    app.run(host="127.0.0.1",port=3001, debug=True)