from django.shortcuts import render,  redirect
from django.http import HttpRequest, HttpResponse
import requests, os, base64, shutil
from django.conf import settings

from dotenv import load_dotenv
import os
from pathlib import Path

base_dir = Path(__file__).resolve().parent.parent  # parent of github folder (i.e., project/)
env_path = base_dir / 'env' / '.env'

load_dotenv(dotenv_path=env_path)

# بعدين خزنها بشكل سري
CLIENT_ID = os.environ['CLIENT_ID']
CLIENT_SECRET = os.environ['CLIENT_SECRET']
# Create your views here.

def github_login(request, project_name):
    request.session['project_name'] = project_name
    print(project_name)
    github_auth_url = f"https://github.com/login/oauth/authorize?client_id={CLIENT_ID}&scope=repo"
    return redirect(github_auth_url)

def github_callback(request:HttpRequest):
    project_name = request.session.get('project_name')
    # return HttpResponse(f'نجح الاتصال{request.GET['code']}') 
    code = request.GET.get("code")
    # جلب التوكن الخاص بالمستخدم
    token_url = "https://github.com/login/oauth/access_token"
    headers = {"Accept": "application/json"}
    data = {
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "code": code
    }

    r = requests.post(token_url, headers=headers, data=data)
    access_token = r.json().get("access_token")

    print(f'access token: {access_token}')
    # انشاء مستودع جديد
    repo_url = "https://api.github.com/user/repos"
    repo_data = {"name": f"{project_name}"}
    repo_headers = {
        "Authorization": f"token {access_token}",
        "Accept": "application/vnd.github.v3+json"
    }

    repo_response = requests.post(repo_url, json=repo_data, headers=repo_headers)
    print("Status Code:", repo_response.status_code)
    print("Response JSON:", repo_response.json())
    
    
    # 3. جلب اسم المستخدم
    user_response = requests.get("https://api.github.com/user", headers=repo_headers)
    username = user_response.json().get("login")

    # 4. رفع الملفات من مجلد المشروع
    def upload_file_to_github(file_path, content):
        url = f"https://api.github.com/repos/{username}/{project_name}/contents/{file_path}"
        encoded_content = base64.b64encode(content.encode()).decode()
        data = {
            "message": f"add {file_path}",
            "content": encoded_content,
            "branch": "main"
        }
        upload_resp = requests.put(url, json=data, headers=repo_headers)
        print(f"Uploaded {file_path}: {upload_resp.status_code}")

    project_dir = os.path.join(settings.BASE_DIR, 'user_projects', project_name)

    for root, dirs, files in os.walk(project_dir):
        for file in files:
            local_path = os.path.join(root, file)
            rel_path = os.path.relpath(local_path, project_dir).replace("\\", "/")
            try:
                with open(local_path, "r", encoding="utf-8") as f:
                    content = f.read()
                    upload_file_to_github(rel_path, content)
            except Exception as e:
                print(f"Error uploading {rel_path}: {e}")
    
    # حذف مجلد المشروع بعد الرفع
    try:
        shutil.rmtree(project_dir)
        print(f"Deleted project directory: {project_dir}")
    except Exception as e:
        print(f"Error deleting project directory: {e}")


    return render(request, 'github/index.html')