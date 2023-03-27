from PIL import Image
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import utils
import bert


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)


@app.get('/api/')
def root():
    prompt = 'Hello, World!'

    sample = Image.open('data/forest.png')
    image = utils.img2base64(sample)

    response = {
        'prompt': prompt,
        'image': image,
    }
    return response

@app.get('/api/text-similarity')
def calc_similarity(text1: str, text2: str):
    response = {
        'value': bert.calc_similarity((text1, text2))
    }
    return response

