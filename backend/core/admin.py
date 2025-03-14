from django.contrib import admin

from .models import User, Test, QuestionType, Question, Answer, Result


class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'first_name', 'last_name')


class TestAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'creator', 'created')


class QuestionTypeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

class QuestionAdmin(admin.ModelAdmin):
    list_display = ('id', 'text', 'type')

class AnswerAdmin(admin.ModelAdmin):
    list_display = ('id', 'text', 'correct')

class ResultAdmin(admin.ModelAdmin):
    list_display = ('id', 'test', 'user', 'score', 'completed_at')


admin.site.register(User, UserAdmin)
admin.site.register(Test, TestAdmin)
admin.site.register(QuestionType, QuestionTypeAdmin)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Answer, AnswerAdmin)
admin.site.register(Result, ResultAdmin)
