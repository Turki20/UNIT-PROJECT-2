from django.contrib import admin

# Register your models here.

from .models import Question, QuestionPart, Tag

admin.site.register(Question)
admin.site.register(QuestionPart)
admin.site.register(Tag)