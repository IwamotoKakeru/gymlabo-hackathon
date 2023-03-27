# BERTモデルのOnnx変換

1. [Huggingface](https://huggingface.co/)のアカウントを作成
2. `pip install --upgrade huggingface_hub` でHuggingface-CLIをインストール
3. アカウント画面でトークンを発行
4. `huggingface-cli login`で発行したトークンを入力してログイン
5. `python -m transformers.onnx --model=bert-base-uncased --feature default onnx/`でonnx/model.onnxが生成される
6. `onnx/model.onnx`を`onnx/bert.onnx`に変更する