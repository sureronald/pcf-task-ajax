# Getting started
1. building angular client
2. python requirements, migration and dev server

## 1. building angular client

```
cd [project_root]/frontend
ng build --deploy-url='/static/'
```

## 2. Python requirements

```
cd [project_root]/backend
source .venv/bin/activate # create a virtualenv first
pip install -r requirements.pip
python manage.py migrate
python manage.py runserver
```
