from django.shortcuts import render
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect

def home(request):
    return render(request, 'intro.html')
def contact_us(request):
    return render(request, 'contact_us.html')
def bottle_info(request):
    return render(request, 'bottle_info.html')
def about(request):
    return render(request, 'about.html')
def winery(request):
    return render(request, 'winery.html')
