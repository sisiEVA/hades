from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    publish_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'user'
