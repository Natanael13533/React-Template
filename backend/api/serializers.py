from api.models import Bencana
from rest_framework import serializers

class BencanaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bencana
        fields = ["id", "wilayah", "total_bencana", "korban_luka", "korban_jiwa", "date"]

# class KorbanJiwaSumSerializer(serializers.Serializer):
#     total = serializers.IntegerField()