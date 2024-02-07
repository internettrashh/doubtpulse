from flask import Flask, request
import numpy as np

from werkzeug.exceptions import BadRequestKeyError
from rapid_latex_ocr import LatexOCR
from PIL import Image
import os
import tempfile

app = Flask(__name__)
model = LatexOCR()

@app.route('/convert', methods=['POST'])
def convert_image():
    try:
        # Save the uploaded image to a temporary file
        image = request.files['image']
    except BadRequestKeyError:
        return "Image not found in request", 400

    temp_file = tempfile.NamedTemporaryFile(delete=False)
    image.save(temp_file.name)

    # Load the image data using Pillow and convert to numpy array
    with Image.open(temp_file.name) as img:
        data = np.array(img.convert('RGB'))

    # Perform OCR on the image
    res, elapse = model(data)

    # Delete the temporary file
    os.remove(temp_file.name)

    return res

if __name__ == '__main__':
    app.run(debug=True)