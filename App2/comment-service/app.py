from flask import Flask, jsonify, request

app = Flask(__name__)

comments = []

@app.route('/comments', methods=['POST'])
def create_comment():
    comment = request.json
    comments.append(comment)
    return jsonify(comment), 201

@app.route('/comments', methods=['GET'])
def get_comments():
    return jsonify(comments)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)