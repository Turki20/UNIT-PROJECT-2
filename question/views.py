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

    related_questions = Question.objects.filter(
        tag__in=tags
    ).exclude(
        id=q_id
    ).distinct().order_by('-created_at')[:6]
    
    
    if len(related_questions) < 6:
        remaining = 6 - len(related_questions)
        latest_questions = Question.objects.exclude(
            id__in=[q.id for q in related_questions] + [q_id]
        ).order_by('-created_at')[:remaining]
        related_questions = list(related_questions) + list(latest_questions)  
          
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

def search_view(request:HttpRequest):
    all_tags = Tag.objects.all()
    if request.method == 'POST':
        if request.POST['tag'] == 'all':
            search = request.POST['search']
            question_results = Question.objects.filter(title__icontains = search)
            final_objects = []
            for q in question_results:
                related_tag = Tag.objects.filter(many_to_many = q)
                final_objects.append({
                    'question': q,
                    'tags': related_tag
                })
        else:
            search = request.POST['search']
            question_results = Question.objects.filter(title__icontains = search)
            search_tag = request.POST['tag']
            final_objects = []
            for q in question_results:
                related_tag = Tag.objects.filter(many_to_many = q)
                for tag in related_tag:
                    if tag.name == search_tag:
                        final_objects.append({
                            'question': q,
                            'tags': related_tag
                        })
            
        return render(request, 'question/search.html', {'final_objects': final_objects, 'last_search': search, 'all_tags': all_tags, 'count': len(final_objects)})
    
    return render(request, 'question/search.html')

def tag_search_view(request:HttpRequest, tag_id):
    all_tags = Tag.objects.all()
    search = ""
    final_objects = []
    tag = Tag.objects.get(pk = tag_id)
    questions = tag.many_to_many.all().order_by('-created_at')  
    for q in questions:
        related_tag = Tag.objects.filter(many_to_many = q)
        final_objects.append({
            'question': q,
            'tags': related_tag
        }) 
    return render(request, 'question/search.html', {'final_objects': final_objects, 'last_search': search, 'all_tags': all_tags, 'count': len(final_objects)})


def add_question_view(request:HttpRequest):
    all_tags = Tag.objects.all()
    if request.method == 'POST':
        name = request.POST['name']
        title = request.POST['title']
        content_json = request.POST['content_json']
        content_list = json.loads(content_json)
        
        tags_json = request.POST['tags']
        tag_list = json.loads(tags_json)

        q = Question.objects.create(
            title = title,
            user_name = name
        )
        
        for tag in tag_list:
            add_tag = Tag.objects.get(name=tag)
            add_tag.many_to_many.add(q.id)  
        
        for part in content_list:
            if part['type'] == 'text':
                QuestionPart.objects.create(
                    question_id = q,
                    part_type = 'text',
                    content = part['value'],
                    order = part['order']
                )
            elif part['type'] == 'code':
                QuestionPart.objects.create(
                    question_id = q,
                    part_type = 'cpde',
                    content = part['value'],
                    order = part['order']
                )
            elif part['type'] == 'img':
                format, imgstr = part['value'].split(';base64,')
                ext = format.split('/')[-1]
                image_file = ContentFile(base64.b64decode(imgstr), name=f'{uuid.uuid4()}.{ext}')
                QuestionPart.objects.create(
                    question_id = q,
                    part_type = 'image',
                    image = image_file,
                    order = part['order']
                )
        
    return render(request, 'question/add_question.html', {'all_tags': all_tags})
