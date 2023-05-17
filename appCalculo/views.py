from django.shortcuts import render
import math as m
from numpy import log as ln
# Create your views here.



def calculo(request):
    return render(request, 'index.html')