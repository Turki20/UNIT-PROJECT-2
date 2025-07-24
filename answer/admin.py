from django.contrib import admin

# Register your models here.
from .models import Answer, AnswerPart, AnswerVote

admin.site.register(Answer)
admin.site.register(AnswerPart)
admin.site.register(AnswerVote)