from PIL import Image
from fastapi import FastAPI

import bert
import prompt
import utils
from diffusion import init_model


app = FastAPI()

diffusion = init_model()

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

@app.get('/api/generate')
def generate():
    pmt = prompt.get()
    img_list = diffusion.generate_imgs(pmt)
    imgs = []
    for i in range(1,7):
        img = img_list[i*10-1]
        imgs.append(utils.img2base64(img))

    response = {
        'prompt': pmt,
        'image': imgs,
    }
    return response
