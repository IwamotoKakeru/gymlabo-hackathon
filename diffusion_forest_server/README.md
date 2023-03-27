# Diffusion Forest Server
## Installation
Run following command and save onnx file.
```bash
pip install -r requirements.txt
```

Save at ./onnx/[bert.onnx](https://o365tsukuba-my.sharepoint.com/:u:/g/personal/s2113534_u_tsukuba_ac_jp/ETk5nAYHfXlFm_jVMb9RNRIBvCL7TfTkI-2GEle1O3WrdQ?e=NmqEn8). 
Details [here](/diffusion_forest_server/onnx).

## Usage
```bash
uvicorn main:app
```

## API
- `/api` tests the API. The response is a prompt:text and an image:base64.

- `/api/text-similarity?text1=hoge&text2=fuga` calculates the cosine similarity between hoge and fuga. The response is a value:float.

- `/api/generate` generates images from random prompt. The response is a prompt:text and images:base64.

