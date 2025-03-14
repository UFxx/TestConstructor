from rest_framework import serializers
from .models import User, Test, QuestionType, Question, Answer, Result



class AnswerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Answer
        fields = ('id', 'text', 'correct')


class CreateQuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Question
        fields = ('id', 'text', 'type',  )


class CreateTestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ('id', 'title', 'description', 'creator', 'created', )

        extra_kwargs = {'creator': {'read_only': True},
                        }

    def create(self, validated_data):
        return  Test.objects.create(**validated_data, creator=self.context['request'].user)


class QuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Question
        fields = ('id', 'text', 'type',  'answers')

    def update(self, instance, validated_data):
        instance.text = validated_data.get('text', instance.text)
        instance.type = validated_data.get('type', instance.type)
        answers_instance = validated_data.get('answers', [])
        instance.answers.add(*answers_instance)
        instance.save()
        return instance


class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ('id', 'title', 'description', 'creator', 'created', 'questions' )

        extra_kwargs = {'creator': {'read_only': True},
                        }

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        questions_instance = validated_data.get('questions', [])
        instance.questions.add(*questions_instance)
        instance.save()
        return instance


class CheckAnswerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Answer
        fields = ('correct',)
