from django.shortcuts import render,  redirect
from django.http import HttpRequest
# Create your views here.

def index_view(request:HttpRequest):
    
    return render(request, 'generator/index.html')

def add_models_view(request:HttpRequest):
    if request.method == 'POST':
        project = request.POST['name']
        apps = request.POST.getlist('apps')
        print(project, apps)
        return render(request, 'generator/add_models.html', {'project_name': project, 'apps': apps})