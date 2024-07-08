from django.urls import path
from api.views import BencanaList, KorbanJiwaSumView

app_name = "api"

urlpatterns = [
    path("bencana/", BencanaList.as_view(), name="bencana-list"),
    path("korban_jiwa/", KorbanJiwaSumView.as_view(), name='korban-jiwa'),
]