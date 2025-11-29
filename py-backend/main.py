from flask import Flask, request
from flask_cors import CORS
from path_algorithm import getPath, getPathFull
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/getPath", methods=["POST", "OPTIONS"])
def getPost():
    # Handle CORS Preflight request
    if request.method == "OPTIONS":
        return {"status": "ok"}, 200

    body = request.get_json()
    print(body)

    source = body["source"]
    dest = body["destination"]

    # If user adds intermediate nodes
    if "nodes" in body:
        nodes = body["nodes"]
        return {"path": getPathFull(source, nodes, dest)}

    # Simple source → destination path
    return {"path": getPath(source, dest)}


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))   # Render will set PORT automatically
    app.run(host="0.0.0.0", port=port)
