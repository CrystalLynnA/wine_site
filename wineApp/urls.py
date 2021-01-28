from django.urls import path
from . import views

urlpatterns=[
    path('', views.home),
    path('contact_us', views.contact_us),
    path('bottle_info', views.bottle_info),
    path('about', views.about),
    path('winery', views.winery),
]