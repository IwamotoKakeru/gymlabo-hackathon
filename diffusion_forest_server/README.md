# Diffusion Forest Server
## Installation
```bash
pip install fastapi[all]
```

## Start server
```bash
uvicorn main:app --reload
```

## Usage
```bash
curl localhost:8000/api/

# Json data: {'prompt': 'hogehoge', 'image': base64 image}
```

