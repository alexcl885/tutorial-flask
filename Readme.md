# Mi primera aplicacion FLASK

Nuestra referencia en la web es el [manual de Flask](https://flask.palletsprojects.com/en/stable/)


Si no lo tenemos instalado previamente:

```python
apt install python3.12 python3.12-venv
```
[Empezamos la instalacion](https://flask-praetorian.readthedocs.io/en/latest/quickstart.html#requirements) :

```python
mkdir flask
cd flask
python -v venv venv
. ./venv/bin/activate

```

Creamos un archivo `.gitignore`, le añadimos la carpeta: ***venv***

Inicializamos el repo:

```bash
git init 
```

Añadimos Flask al proyecto:

```bash
pip install Flask
```

**Cada vez que añadimos una dependencia hay que ejecutar esto:**
```bash
pip freeze > requirements.txt
```

Creamos un archivo `hello.py` con este contenido:

```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
```

Me aseguro que el virtual enviroment este activo y ejecuta la app en el puerto 8080:

```bash
flask --app hello run
```