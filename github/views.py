from django.shortcuts import render,  redirect
from django.http import HttpRequest, HttpResponse
import requests

# بعدين خزنها بشكل سري
CLIENT_ID = 'Ov23livc34ewoB4lkDc9'
CLIENT_SECRET = '1746c985b0e0b1f4335dd4a2b01dbcbd20666fa7'
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
    # # توليد مشروع Django محليا
    # os.system("django-admin startproject generated_project")

    # # رفع الملفات إلى المستودع الجديد باستخدام Git commands
    # os.chdir("generated_project")
    # os.system("git init")
    # os.system("git add .")
    # os.system('git commit -m "Initial commit"')
    # repo_clone_url = repo_response.json().get("clone_url").replace("https://", f"https://{access_token}@")
    # os.system(f"git remote add origin {repo_clone_url}")
    # os.system("git push -u origin master")

    return render(request, 'github/index.html', {'repo_response': repo_response})