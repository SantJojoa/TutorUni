from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework import viewsets
from .models import Superadmin,Student,Teacher
from .serializers import SuperadminSerializer, StudentSerializer, TeacherSerializer

# Create your views here.

def register_teacher(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        new_teacher = Teacher.objects.create(
            name = data.get('name'),
            f_last_name = data.get('f_last_name'),
            s_last_name = data.get('s_last_name'),
            email = data.get('email'),
            password = data.get('password'),
            ced = data.get('ced'),
            tel = data.get('tel'),
            abil = data.get('abil'),
            desc = data.get('desc'),
        )
        new_teacher.save()
        return JsonResponse({'message': 'Teacher registered successfully'}, status=201)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

class SuperadminViewSet(viewsets.ModelViewSet):
    queryset = Superadmin.objects.all()
    serializer_class = SuperadminSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer