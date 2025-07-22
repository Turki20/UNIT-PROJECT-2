from django.shortcuts import render,  redirect
from django.http import HttpRequest
import json
# Create your views here.

def index_view(request:HttpRequest):
    
    return render(request, 'generator/index.html')

def add_models_view(request:HttpRequest):
    if request.method == 'POST':
        project = request.POST['name']
        apps = request.POST.getlist('apps')
        apps = json.dumps(apps)
        print(project, apps)
        return render(request, 'generator/add_models.html', {'project_name': project, 'apps': apps})
    
def save_models_view(request):
    if request.method == 'POST':
        models_json = request.POST.get('models')
        models = json.loads(models_json) if models_json else []
        
        apps_json = request.POST.get('apps')
        apps = json.loads(apps_json) if apps_json else []
        
        project_name = request.POST.get('project_name')
        print(project_name, apps, models)
        return render(request, 'generator/models_result.html', {'models': models})

    return render(request, 'generator/models_result.html', {'models': []})