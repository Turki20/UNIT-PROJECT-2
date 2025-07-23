from django.urls import path

from . import views

app_name = 'github'

urlpatterns = [
    path("login/<str:project_name>/", views.github_login, name="github_login"),
    path("callback/", views.github_callback, name="github_callback"),
]
