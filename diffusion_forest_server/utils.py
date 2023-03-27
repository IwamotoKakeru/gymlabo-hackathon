import base64
from io import BytesIO
from PIL import Image


def img2base64(img):
    buffer = BytesIO()
    img.save(buffer, format='png')
    code = base64.b64encode(buffer.getvalue()).decode('ascii')
    return code

