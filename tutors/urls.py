from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import SuperadminViewSet, StudentViewSet, TeacherViewSet, register_teacher

router = DefaultRouter()
router.register(r'superadmins',SuperadminViewSet)
router.register(r'students',StudentViewSet)
router.register(r'teachers',TeacherViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/teachers/register/',register_teacher, name='register_teacher')
]
