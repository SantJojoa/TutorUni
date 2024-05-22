from django.db import models


# Create your models here.
class Superadmin(models.Model):
    ced = models.CharField(null=False, max_length=10)
    name = models.CharField(max_length=50, null=False)
    email = models.CharField(max_length=100, null=False)
    password = models.CharField(max_length=250, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True, null=False)
    deleted_at = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return self.id


class Student(models.Model):
    doc = models.CharField(null=False, max_length=10)
    code = models.CharField(max_length=10, null=False)
    name = models.CharField(max_length=50, null=False)
    tel = models.IntegerField(null=True)
    uni = models.CharField(max_length=150, null=False)
    email = models.CharField(max_length=100, null=False)
    password = models.CharField(max_length=250, null=False)
    career = models.CharField(max_length=100, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True, null=False)
    deleted_at = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return str(self.id)


class Teacher(models.Model):
    ced = models.CharField(null=False, max_length=10)
    name = models.CharField(max_length=50, null=False)
    f_last_name = models.CharField(max_length=50, null=False)
    s_last_name = models.CharField(max_length=50, null=True, default='')
    email = models.CharField(max_length=100, null=False)
    password = models.CharField(max_length=250, null=False)
    tel = models.CharField(max_length=10, null=True)
    abil = models.CharField(max_length=500, null=False)
    desc = models.CharField(max_length=300, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True, null=False)
    deleted_at = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return str(self.id)
