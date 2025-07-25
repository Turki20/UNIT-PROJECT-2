from django.shortcuts import render
from django.http import HttpRequest, HttpResponse

from .models import Question, Tag, QuestionPart
from answer.models import Answer, AnswerVote, AnswerPart
# Create your views here.

def question_detail_view(request:HttpRequest, q_id:int):
    quesetion = Question.objects.get(id = q_id)
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

import random
from django.utils import timezone
from question.models import Question, QuestionPart, Tag
from answer.models import Answer, AnswerPart, AnswerVote

# حذف البيانات القديمة إذا أردت
# Question.objects.all().delete()
# Answer.objects.all().delete()
# QuestionPart.objects.all().delete()
# AnswerPart.objects.all().delete()
# AnswerVote.objects.all().delete()
# Tag.objects.all().delete()

def data():
    # ✅ إنشاء تاقات حقيقية
    tags_data = ["Django", "Python", "API", "HTML", "CSS", "JavaScript", "Database", "Model", "View", "Template"]
    tags = []
    for tag_name in tags_data:
        tag = Tag.objects.create(name=tag_name)
        tags.append(tag)

    # ✅ بيانات أسئلة حقيقية
    questions_data = [
        {
            "title": "How to create a model in Django?",
            "user_name": "ahmed_dev",
            "parts": [
                {"type": "text", "content": "I want to create a model for storing blog posts. How to do it?"},
                {"type": "cpde", "content": "from django.db import models\n\nclass Post(models.Model):\n    title = models.CharField(max_length=255)\n    content = models.TextField()\n    created_at = models.DateTimeField(auto_now_add=True)", "lang": "python"}
            ]
        },
        {
            "title": "What is REST API?",
            "user_name": "sara_code",
            "parts": [
                {"type": "text", "content": "Can someone explain REST API in simple words?"}
            ]
        },
        {
            "title": "How to center a div in CSS?",
            "user_name": "mohammed_css",
            "parts": [
                {"type": "text", "content": "I struggle with centering divs. What is the easiest way?"},
                {"type": "cpde", "content": "div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", "lang": "css"}
            ]
        }
    ]

    # ✅ إنشاء الأسئلة وأجزائها
    for q_index, q_data in enumerate(questions_data):
        question = Question.objects.create(
            title=q_data["title"],
            user_name=q_data["user_name"],
            created_at=timezone.now()
        )
        
        # إضافة تاقات عشوائية لكل سؤال
        
        # إضافة أجزاء السؤال
        for order, part in enumerate(q_data["parts"], start=1):
            QuestionPart.objects.create(
                question_id=question,
                part_type=part["type"],
                content=part["content"],
                lang=part.get("lang"),
                order=order
            )
        
        # ✅ إنشاء إجابات حقيقية لكل سؤال
        answers_data = [
            {
                "user_name": "dev_helper",
                "parts": [
                    {"type": "text", "content": f"This is a helpful answer to: {q_data['title']}"}
                ]
            },
            {
                "user_name": "coder_pro",
                "parts": [
                    {"type": "text", "content": "Here is another explanation with code:"},
                    {"type": "cpde", "content": "# Sample code snippet\nprint('Always test your code!')", "lang": "python"}
                ]
            }
        ]
        
        for a_index, a_data in enumerate(answers_data):
            answer = Answer.objects.create(
                question_id=question,
                user_name=a_data["user_name"],
                created_at=timezone.now()
            )
            
            for order, part in enumerate(a_data["parts"], start=1):
                AnswerPart.objects.create(
                    answer_id=answer,
                    part_type=part["type"],
                    content=part["content"],
                    lang=part.get("lang"),
                    order=order
                )
            
            # ✅ إضافة تصويتات حقيقية عشوائية
            for v in range(random.randint(2, 5)):
                AnswerVote.objects.create(
                    user_name=f"user_vote_{random.randint(1,100)}",
                    answer_id=answer,
                    value=random.choice([1, -1])
                )

    print("✅ Realistic data generation completed successfully.")
