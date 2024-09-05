from flask import Flask, jsonify, request

app = Flask(__name__)

posts = []

@app.route('/posts', methods=['POST'])
def create_post():
    post = request.json
    posts.append(post)
    return jsonify(post), 201

@app.route('/posts', methods=['GET'])
def get_posts():
    return jsonify(posts)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)