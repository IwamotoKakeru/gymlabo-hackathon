import torch
import onnxruntime
import numpy as np
from transformers import AutoTokenizer
from sentence_transformers import SentenceTransformer


sentformer = SentenceTransformer('paraphrase-MiniLM-L6-v2')
cos_sim = torch.nn.CosineSimilarity(dim=0, eps=1e-6)

tokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')
bert = onnxruntime.InferenceSession('onnx/bert.onnx')


def dict2numpy(d):
    return {k: np.array(v) for k, v in d.items()}


def calc_similarity(two_sentences):
    emb = sentformer.encode(two_sentences, convert_to_tensor=True)
    sim = cos_sim(*emb)
    return sim.item()


def calc_similarity_legacy(two_sentences):
    tokens = tokenizer(two_sentences, padding=True)
    input_data = dict2numpy(tokens)

    features, _ = bert.run(None, input_data)

    f1, f2 = features[:, 0]
    sim = np.dot(f1, f2) / (np.linalg.norm(f1) * np.linalg.norm(f2))

    return sim.item()