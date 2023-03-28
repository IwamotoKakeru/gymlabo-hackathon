import torch
from sentence_transformers import SentenceTransformer


sentformer = SentenceTransformer('paraphrase-MiniLM-L6-v2')
cos_sim = torch.nn.CosineSimilarity(dim=0, eps=1e-6)


def calc_similarity(two_sentences):
    emb = sentformer.encode(two_sentences, convert_to_tensor=True)
    sim = cos_sim(*emb)
    return sim.item()
