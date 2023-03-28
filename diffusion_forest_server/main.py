from PIL import Image
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import bert
import prompt
import utils
from diffusion import init_model


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

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
        'value': bert.calc_similarity(('The picture of ' + text1, 'The picture of ' + text2))
    }
    return response

@app.get('/api/generate')
async def generate(img_num: int = 6):
    pmt = 'The picture of ' + prompt.get()
    diffusion.generate_imgs(pmt, img_num=img_num)
    response = {
        'prompt': pmt,
        'img_num': img_num
    }
    return response

@app.get('/api/get-image-step')
def get_image(id: int):
    with Image.open(f'step/{id}.png') as img:
        try:
            response = {
                'image': utils.img2base64(img)
            }
        except:
            response = {
                'image': None
            }
    return response

@app.get('/api/get-image')
def get_image():
    try:
        with open('genereated.png', 'rb') as f:
            img = Image.open(f)
            response = {
                'image': utils.img2base64(img)
            }
    except:
        response = {
            'image': None
        }
    
    return response