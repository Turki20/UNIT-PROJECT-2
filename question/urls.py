from django.urls import path
from . import views as question

app_name = 'question'


urlpatterns = [
    path('<q_id>/', question.question_detail_view, name='question_detail_view'),
]
