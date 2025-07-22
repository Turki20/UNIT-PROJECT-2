from django.urls import path
from . import views as generator

app_name = 'generator'

urlpatterns = [
    path('', generator.index_view, name='index_view'),
    path('add_models/', generator.add_models_view, name='add_models_view'),
]
