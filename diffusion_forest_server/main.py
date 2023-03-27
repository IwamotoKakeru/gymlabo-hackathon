import utils
from PIL import Image
from fastapi import FastAPI

app = FastAPI()


@app.get('/api/')
async def root(prompt: str = 'Hello, World!'):
    prompt = 'Hello, World!'

    sample = Image.open('data/forest.png')
    image = utils.img2base64(sample)

    data = {
        'prompt': prompt,
        'image': image,
    }
    return data

