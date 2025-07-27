from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
import json
from .models import Question, Tag, QuestionPart
from answer.models import Answer, AnswerVote, AnswerPart
# Create your views here.
import base64
import uuid
from django.core.files.base import ContentFile


def question_detail_view(request:HttpRequest, q_id:int):
    quesetion = Question.objects.get(id = q_id)
    if request.method == 'POST':
        content_json = request.POST['content_json']
        content_list = json.loads(content_json)
        new_answer = Answer(question_id = quesetion, user_name = request.POST.get('user_name'))
        new_answer.save()
        print(content_list)
        for i in content_list:
            if i['type'] == 'code':
                AnswerPart(answer_id = new_answer, part_type = 'cpde',content = i['value'] ,order=i['order']).save()
            if i['type'] == 'text':
                AnswerPart(answer_id = new_answer, part_type = 'text',content = i['value'] ,order=i['order']).save()
            if i['type'] == 'image':
                format, imgstr = i['value'].split(';base64,')
                ext = format.split('/')[-1]
                image_file = ContentFile(base64.b64decode(imgstr), name=f'{uuid.uuid4()}.{ext}')
                AnswerPart(answer_id = new_answer, part_type = 'image', content = ' ' ,image = image_file,order=i['order']).save()
                
    quesetion_parts = QuestionPart.objects.filter(question_id = quesetion.id).order_by('order')
    tags = Tag.objects.filter(many_to_many__id = quesetion.id)
    
    answers = Answer.objects.filter(question_id = quesetion.id)
    final_anwers = []
    for answer in answers:
        answers_parts = AnswerPart.objects.filter(answer_id = answer.id).order_by('order')
        final_anwers.append({'answer': answer, 'answers_parts': answers_parts})

    related_questions = Question.objects.all() # غيرها بعدين 
    all_tags = Tag.objects.all()[:10]
    
    print(tags)
    context = {
        'q': quesetion,
        'tags': tags,
        'quesetion_parts': quesetion_parts,
        'final_anwers': final_anwers,
        'related_questions':related_questions,
        'all_tags': all_tags,
    }
    
    return render(request, 'question/detail.html', context)
