# Mi Primera Aplicación Flask

Nuestra referencia en la web es el [manual de Flask](https://flask.palletsprojects.com/en/stable/).

---

## Instalación de Flask

Si no lo tenemos instalado previamente:
```bash
apt install python3.12 python3.12-venv
```

[Empezamos la instalación](https://flask-praetorian.readthedocs.io/en/latest/quickstart.html#requirements):
```bash
mkdir flask
cd flask
python -v venv venv
. ./venv/bin/activate
```

### Configuración del repositorio Git

Creamos un archivo `.gitignore` y añadimos la carpeta `venv`.

Inicializamos el repositorio:
```bash
git init
```

### Instalación de Flask

Añadimos Flask al proyecto:
```bash
pip install Flask
```

Cada vez que añadimos una dependencia, debemos ejecutar:
```bash
pip freeze > requirements.txt
```

### Creación de la aplicación

Creamos un archivo `hello.py` con el siguiente contenido:
```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
```

Verificamos que el entorno virtual está activo y ejecutamos la aplicación en el puerto 8080:
```bash
flask --app hello run
```

---

## Instalación de MongoDB

[Basado en la imagen oficial de MongoDB](https://hub.docker.com/_/mongo), adaptamos el archivo `docker-compose.yml`:
```yaml
version: '3.1'

services:
  mongo:
    image: mongo
    restart: "no"
    ports:
        - 27017:27017
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: miguelon

  mongo-express:
    image: mongo-express
    restart: "no"
    ports:
      - 8081:8081
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: miguelon
      ME_CONFIG_MONGODB_URL: mongodb://root:miguelon@mongo:27017/
      ME_CONFIG_BASICAUTH: "false"
```

### Estructura de MongoDB
Mongo organiza los datos de la siguiente manera:

| MySQL           | MongoDB      |
|----------------|-------------|
| Base de Datos  | Base de Datos |
| Tablas         | Colecciones  |
| Filas/Duplas   | Documentos   |

En MongoDB, no podemos tener bases de datos sin colecciones; siempre se requiere al menos una colección.

### Conexión desde VS Code
Podemos conectarnos mediante un plugin utilizando la siguiente URL:
```txt
mongodb://root:miguelon@localhost:27017/
```

---

## Instalación de dependencias adicionales

### Flask-Praetorian
```bash
pip install flask-praetorian
```

### MongoEngine
[Referencia oficial](https://docs.mongoengine.org/)
```bash
pip install mongoengine
```

