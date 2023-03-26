# Diffusion Forest Server
## Installation
```bash
pip install -r requirements.txt
```

## Download models
save at ./data/[bert.onnx](https://o365tsukuba-my.sharepoint.com/:u:/g/personal/s2113534_u_tsukuba_ac_jp/ETk5nAYHfXlFm_jVMb9RNRIBvCL7TfTkI-2GEle1O3WrdQ?e=NmqEn8)


## Start server
```bash
uvicorn main:app --reload
```

## Usage
```bash
curl localhost:8000/api/

# Json data: {'prompt': 'hogehoge', 'image': base64 image}
```
