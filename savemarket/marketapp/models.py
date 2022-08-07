from django.db import models

# Create your models here.
# class Food(models.Model):
#     fno = models.AutoField(primary_key=True) #id
#     name = models.CharField(max_length=10, blank=True, null=True)
#     price = models.IntegerField(blank=True, null=True)
#     place = models.CharField(max_length=80, blank=True, null=True)
#     page = models.CharField(max_length=80, blank=True, null=True)

#     class Meta:
#         managed = False
#         db_table = 'food'

class Review(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)