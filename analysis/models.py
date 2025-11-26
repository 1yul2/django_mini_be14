from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.

class Analysis(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    is_income = models.BooleanField("분석 대상")
    periiod = models.CharField("분석 기간", max_length=255)
    end_date = models.DateTimeField()
    start_date = models.DateTimeField()
    description = models.TextField()
    result_image = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)