from django.contrib import admin

# Register your models here.
from .models import Superadmin,Student,Teacher

admin.site.register(Superadmin)
admin.site.register(Student)
admin.site.register(Teacher)