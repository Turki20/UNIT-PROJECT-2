from django.shortcuts import render,  redirect
from django.http import HttpRequest
import json
from scripts.generate_project import Project
import subprocess
import os

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
    
def create_project_view(request):
    if request.method == 'POST':
        models_json = request.POST.get('models')
        models = json.loads(models_json) if models_json else []
        apps_json = request.POST.get('apps')
        apps = json.loads(apps_json) if apps_json else []
        project_name = request.POST.get('project_name')
        
        project = Project(project_name, apps, models)
        
        # create project ---
        # os.chdir('user_projects')
        if project.create_project():
            print('\n\nSuccess\n\n')
            if project.create_apps():
                print('\n\nSuccess app\n\n')
                if project.create_models_file():
                    return redirect('github:github_login', project_name=project_name)
            # os.chdir(project_name)
            # if project.create_apps():
            #     os.chdir('../')
            #     print('\nadded successfully\n')
                
       #project.craete_models_file()
        
        # os.chdir('../')
        print(os.getcwd())   
        # end project creation --- 
        return render(request, 'generator/models_result.html', {'models': models})

    return redirect('index_view')

