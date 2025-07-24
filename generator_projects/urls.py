from django.urls import path
from . import views as generator

app_name = 'generator'

urlpatterns = [
    path('', generator.home_view, name='home_view'),
    path('django_builder/', generator.index_view, name='index_view'),
    path('add_models/', generator.add_models_view, name='add_models_view'),
    path('create_project/', generator.create_project_view, name='create_project_view'),
]
