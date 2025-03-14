from django.shortcuts import render
from rest_framework import status
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView

from .permissions import IsStaffPermission
from .serializers import *
from .models import *

class AnswerCreateView(CreateAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = (IsStaffPermission,)


class QuestionCreateView(CreateAPIView):
    queryset = Question.objects.all()
    serializer_class = CreateQuestionSerializer
    permission_classes = (IsStaffPermission,)


class TestCreateView(CreateAPIView):
    queryset = Test.objects.all()
    serializer_class = CreateTestSerializer
    permission_classes = (IsStaffPermission,)


class AnswerRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = (IsStaffPermission,)
    lookup_field = 'id'

class QuestionRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = (IsStaffPermission,)
    lookup_field = 'id'

class TestRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Test.objects.all()
    serializer_class = TestSerializer
    permission_classes = (IsStaffPermission,)
    lookup_field = 'id'


class TestListView(ListAPIView):
    queryset = Test.objects.all()
    serializer_class = CreateTestSerializer


class CheckAnswerRetrieveView(RetrieveAPIView):
    queryset = Answer.objects.all()
    serializer_class = CheckAnswerSerializer
    lookup_field = 'id'