import onnxruntime
import numpy as np
from transformers import AutoTokenizer


tokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')
bert = onnxruntime.InferenceSession('onnx/bert.onnx')


def dict2numpy(d):
    return {k: np.array(v) for k, v in d.items()}


def calc_similarity(two_sentences):
    tokens = tokenizer(two_sentences, padding=True)
    input_data = dict2numpy(tokens)

    features, _ = bert.run(None, input_data)

    f1, f2 = features[:, 0]
    sim = np.dot(f1, f2) / (np.linalg.norm(f1) * np.linalg.norm(f2))

    return sim.item()

