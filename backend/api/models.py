from django.db import models

# Create your models here.
class Bencana(models.Model):
    wilayah = models.CharField(max_length=250)
    total_bencana = models.CharField(max_length=10)
    korban_luka = models.CharField(max_length=100)
    korban_jiwa = models.IntegerField()
    date = models.CharField(max_length=100)

    class Meta:
        db_table = "tbbencana"
    
    def __str__(self):
        return self.wilayah