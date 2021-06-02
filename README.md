# Getting started
1. building angular client
2. python requirements, migration and dev server

## 1. building angular client

This is so that you can load the frontend app when you visit django's default page `http://localhost:8000/`.
```
cd [project_root]/frontend
ng build --deploy-url='/static/'
```
You can still do *ng serve* and the application will still work fine (This is preferred because reloading the django page above with angular urls injected in the location bar will throw errors).

## 2. Python requirements, migration and dev server

```
cd [project_root]/backend
source .venv/bin/activate # create a virtualenv first
pip install -r requirements.pip
python manage.py migrate
python manage.py runserver
```
