from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/saludo/<nombre>")
def holaCarabola(nombre):
    return "<p>Hello, " +nombre + " !!!!</p>"