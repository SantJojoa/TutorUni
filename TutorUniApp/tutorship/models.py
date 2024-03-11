from django.db import models
# Create your models here.
class admin(models.Model):
    id = models.IntegerField(primary_key=True, null=False)
    ced = models.CharField(null=False,min_length=7,max_length=10)
    name = models.CharField(max_length=50, null=False)
    email = models.CharField(max_length=100, null=False)
    password = models.CharField(max_length=250, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True, null=False)
    deleted_at = models.DateTimeField(auto_now=True, null=True)
    def __str__(self):
        return self.id

class student(models.Model):
    id = models.IntegerField(primary_key=True, null=False)
    doc = models.CharField(null=False,min_length=7,max_length=10)
    code = models.CharField(min_length=5,max_length=10, null=False)
    name = models.CharField(max_length=50, null=False)
    uni = models.CharField(max_length=150, null=False)
    email = models.CharField(max_length=100, null=False)
    password = models.CharField(max_length=250, null=False)
    tel = models.IntegerField(min_length=10,max_length=10,null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True, null=False)
    deleted_at = models.DateTimeField(auto_now=True, null=True)
    def __str__(self):
        return str(self.id)


class teacher(models.Model):
    id = models.IntegerField(primary_key=True, null=False)
    ced = models.CharField(null=False,min_length=7,max_length=10)
    name = models.CharField(max_length=50, null=False)
    email = models.CharField(max_length=100, null=False)
    password = models.CharField(max_length=250, null=False)
    tel = models.IntegerField(min_length=10,max_length=10,null=True)
    abil = models.CharField(max_length=500, null=False)
    desc = models.CharField(min_length=50,max_length=300, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True, null=False)
    deleted_at = models.DateTimeField(auto_now=True, null=True)
    def __str__(self):
        return str(self.id)


