import subprocess
import os
from jinja2 import Environment, FileSystemLoader

from django.template import loader
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
USER_PROJECTS_DIR = os.path.join(BASE_DIR, 'user_projects')

class Project:
    
    def __init__(self, project_name:str, apps:list, models:list):
        self.project_name = project_name
        self.apps = apps
        self.models = models
        self.current_path = ''
        
    
    def create_project(self):
        result_project = subprocess.run(["django-admin", "startproject", self.project_name], capture_output=True, text=True, cwd=USER_PROJECTS_DIR)

        if result_project.returncode == 0:
            return True
        else:
            return False
        
    def create_apps(self):
        state = True
        for app in self.apps:
            result_app = subprocess.run(["python", "manage.py", "startapp", app], capture_output=True, text=True, cwd=USER_PROJECTS_DIR+f'/{self.project_name}')

            if result_app.returncode == 0:
                pass
            else:
                state = False

        return state
    
    def create_models_file(self):
        template = loader.get_template('models_template.py.jinja2')

        apps_models = {} # {'app_name': [{...}, {...}]} contain all models for one app
        for model in self.models:
            app_name = model['app']
            if app_name not in apps_models:
                apps_models[app_name] = []
            apps_models[app_name].append(model)

        #  إنشاء ملف models.py لكل تطبيق
        state = True
        for app_name, models in apps_models.items():
            try:
                output = template.render({'models': models})
                project_path = os.path.join(USER_PROJECTS_DIR, self.project_name, app_name)

                if not os.path.exists(project_path):
                    os.makedirs(project_path)

                models_file_path = os.path.join(project_path, 'models.py')
                with open(models_file_path, 'w') as f:
                    f.write(output)
            except Exception as e:
                print(e)
                state = False

        return state