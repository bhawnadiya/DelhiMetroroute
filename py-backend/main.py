from flask import Flask,request
from path_algorithm import getPath,getPathFull
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@app.route("/getPath",methods=["POST"])
def getPost():
    body= request.get_json()
    print(body)
    source:str = body["source"]
    dest:str = body["destination"]
    if("nodes" in body):
        nodes = body["nodes"]
        return {"path":getPathFull(source,nodes,dest)}
    else:
        return {"path":getPath(source,dest)}
if __name__ == "__main__":
    cross_origin(getPost)
    app.run(port=5000)