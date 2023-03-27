import random


def get(idx=None, lang='en'):
    file = 'data/prompts_' + lang + '.txt'

    with open(file) as f:
        prompts = f.read().split('\n')

    if idx is None:
        idx = random.randint(0, len(prompts)-1)

    return prompts[idx]

