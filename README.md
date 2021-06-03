# Getting started
1. python requirements, migration and dev server
2. building angular client

## 1. Python requirements, migration and dev server

```
cd [project_root]/backend
virtualenv -p /usr/bin/python3 .venv
source .venv/bin/activate
pip install -r requirements.pip
python manage.py migrate
python manage.py runserver
```

## 2. building angular client

You need to build the angular app so that you can load it when you visit django's default page `http://localhost:8000/`.
Prerequisites: node >=v14.16.1, npm >=6.14.12
```
cd [project_root]/frontend
npm install
ng build --deploy-url='/static/'
```
You can still do `ng serve` on the default port 4200 and the application will still work fine (This is preferred because reloading the django page above with angular urls injected in the location bar will throw errors)..

## fire up your browser

with the frontend running via `ng serve` or built to be loaded by django, you can now open your browser and visit `http://localhost:4200` or `http://localhost:8000` for the latter.