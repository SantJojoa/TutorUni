from rest_framework import serializers
from .models import Superadmin, Student,Teacher 

class SuperadminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Superadmin
        fields = '__all__'

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'