import os
import sys
sys.path.append(os.path.abspath(os.path.join(__file__, *[os.pardir] * 3)))
os.environ['DJANGO_SETTINGS_MODULE'] = 'backend.settings'
import django
django.setup()

import json
from api.models import Bencana

import time
start_time = time.time()

with open('csv_data/bencana.json') as jsonfile:
    comments = json.load(jsonfile)
    for num, row in enumerate(comments):
        if not Bencana.objects.filter(pk=num+1).exists():
            Bencana.objects.create(date=row['date'],
                                   wilayah=row["wilayah"],
                                   total_bencana=row['total_bencana'],
                                   korban_luka=row['korban_luka'], 
                                   korban_jiwa=row['kobran_jiwa'],)

print("--- %s seconds ---" % (time.time() - start_time))