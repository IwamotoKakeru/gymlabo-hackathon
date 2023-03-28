# Diffusion Forest Server
## Installation
Run following command and save onnx file.
```bash
pip install -r requirements.txt
```

## Usage
```bash
uvicorn main:app
```

## API
- `/api` tests the API. The response is a prompt:text and an image:base64.

- `/api/text-similarity?text1=hoge&text2=fuga` calculates the cosine similarity between hoge and fuga. The response is a value:float.

- `/api/generate` generates images from random prompt. The response is a prompt:text and images:base64.

