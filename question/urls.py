from django.urls import path
from . import views as question
app_name = 'question'


urlpatterns = [
    path('test/', question.test_view)
]
