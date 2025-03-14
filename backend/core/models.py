from django.contrib.auth.hashers import make_password
from django.db import models

from django.contrib.auth.models import AbstractUser
from django.db.models.functions import Concat
from sortedm2m.fields import SortedManyToManyField


class User(AbstractUser):

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    def __str__(self):
        return f"{self.username}"

    def save(self, *args, **kwargs):
        if self.password and not self.password.startswith(('pbkdf2_sha256$', 'bcrypt$', 'argon2')):
            self.password = make_password(self.password)

        super().save(*args, **kwargs)


class Test(models.Model):
    title = models.CharField(max_length=250, verbose_name='Название')
    description = models.TextField(verbose_name='Описание', blank=True, null=True)
    creator = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True, verbose_name='Создатель')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    questions = SortedManyToManyField('Question', blank=True)

    class Meta:
        verbose_name = 'Тест'
        verbose_name_plural = 'Тесты'

    def __str__(self):
        return f"{self.title}"


class QuestionType(models.Model):
    name = models.CharField(max_length=250, verbose_name='Название', unique=True)

    class Meta:
        verbose_name = 'Тип вопроса'
        verbose_name_plural = 'Типы вопросов'

    def __str__(self):
        return f"{self.name}"


class Question(models.Model):
    text = models.TextField(verbose_name='Описание', blank=True, null=True)
    type = models.ForeignKey(QuestionType, on_delete=models.SET_NULL, blank=True, null=True, verbose_name='Тип вопроса')
    answers = SortedManyToManyField('Answer', blank=True)

    class Meta:
        verbose_name = 'Вопрос'
        verbose_name_plural = 'Вопросы'

    def __str__(self):
        return f"{self.text}"


class Answer(models.Model):
    text = models.TextField(verbose_name='Описание', blank=True, null=True)
    correct = models.BooleanField(verbose_name='Верный ответ', default=False)

    class Meta:
        verbose_name = 'Ответ'
        verbose_name_plural = 'Ответы'

    def __str__(self):
        return f"{self.text}"


class Result(models.Model):
    test = models.ForeignKey(Test, on_delete=models.CASCADE, verbose_name='Тест')
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Пользователь')
    score = models.PositiveIntegerField(verbose_name='Баллы', default=0)
    completed_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')

    class Meta:
        verbose_name = 'Результат'
        verbose_name_plural = 'Результаты'

    def __str__(self):
        return f"{self.pk}"