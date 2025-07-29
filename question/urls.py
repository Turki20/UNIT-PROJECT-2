from django.urls import path
from . import views as question

app_name = 'question'


urlpatterns = [
    path('detail/<q_id>/', question.question_detail_view, name='question_detail_view'),
    path('search/', question.search_view, name='search_view'),
    path('search/<int:tag_id>/', question.tag_search_view, name='tag_search_view'),
    path('add_question/', question.add_question_view, name='add_question_view'),
]
