from django.urls import path
from .views import delivery_insight

urlpatterns = [
    path('delivery-insight/', delivery_insight),
]
