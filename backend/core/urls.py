from django.urls import path
from .views import *

urlpatterns = [
    path('create_answer/', AnswerCreateView.as_view(), name='create_answer'),
    path('create_question/', QuestionCreateView.as_view(), name='create_question'),
    path('create_test/', TestCreateView.as_view(), name='create_test'),
    path('answer_detail/<int:id>/', AnswerRetrieveUpdateDestroyView.as_view(), name='answer_detail'),
    path('question_detail/<int:id>/', QuestionRetrieveUpdateDestroyView.as_view(), name='question_detail'),
    path('test_detail/<int:id>/', TestRetrieveUpdateDestroyView.as_view(), name='test_detail'),
    path('test_list/', TestListView.as_view(), name='test_list'),
    path('check_answer/<int:id>/', CheckAnswerRetrieveView.as_view(), name='check_answer'),

    ]