from django.db import models

# Create your models here.
from question.models import Question

class Answer(models.Model):
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE)
    user_name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    
   
class AnswerPart(models.Model):
    
    class ContentChoice(models.TextChoices):
        TEXT = ('text', 'Text')
        CODE = ('cpde', 'Code')
        IMAGE = ('image', 'Image')
        
    class LangChoice(models.TextChoices):
        PYTHON = ('python', 'Python')
        # ...
        
    answer_id = models.ForeignKey(Answer, on_delete=models.CASCADE)
    part_type = models.CharField(choices=ContentChoice.choices, default=ContentChoice.TEXT)
    content = models.TextField()
    image = models.ImageField(null=True, blank=True, upload_to='images/') # if the type is image
    lang = models.CharField(null=True, blank=True, choices=LangChoice.choices) # if the type is code
    order = models.IntegerField()
    
class AnswerVote(models.Model):
    user_name = models.CharField(max_length=255)
    answer_id = models.ForeignKey(Answer, on_delete=models.CASCADE)
    value = models.IntegerField()