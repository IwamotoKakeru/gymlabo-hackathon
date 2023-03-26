from fastapi import FastAPI


app = FastAPI()


@app.get('/')
async def root(prompt: str = 'Hello, World!'):
    return {'prompt': prompt}

