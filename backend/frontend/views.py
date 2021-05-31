from django.shortcuts import render

def index(request):
    return render(request, 'dist/frontend/index.html')