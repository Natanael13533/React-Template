from django.shortcuts import render
from django.db.models import Sum
from api.serializers import BencanaSerializer
from api.models import Bencana
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.permissions import AllowAny

# Create your views here.
class BencanaList(generics.ListAPIView):
    serializer_class = BencanaSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Bencana.objects.all()

class KorbanJiwaSumView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        total_korban_jiwa = Bencana.objects.aggregate(total=Sum('korban_jiwa'))['total']
        return Response({"total": total_korban_jiwa})
