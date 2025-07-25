from django.shortcuts import render
from django.http import HttpRequest, HttpResponse

from .models import Question
# Create your views here.

def question_detail_view(request:HttpRequest, q_id:int):
    
    quesetion = Question.objects.get(id = q_id)
    return render(request, 'question/detail.html', {'q': quesetion})