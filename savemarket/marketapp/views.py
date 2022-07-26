from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'index.html')
def login(request):
    return render(request, 'login.html')
def beauty(request):
    return render(request, 'beauty.html')
def food(request):
    return render(request, 'food.html')
def stationery(request):
    return render(request, 'stationery.html')
def book(request):
    return render(request, 'book.html')
def life(request):
    return render(request, 'life.html')
def interior(request):
    return render(request, 'interior.html')
def pet(request):
    return render(request, 'pet.html')
def sport(request):
    return render(request, 'sport.html')
def etc(request):
    return render(request, 'etc.html')
def create(request):
    return render(request, 'create.html')
def wishlist(request):
    return render(request, 'wishlist.html')
def joinlist(request):
    return render(request, 'joinlist.html')
def chat(request):
    return render(request, 'chat.html')
def alarm(request):
    return render(request, 'alarm.html')
def account(request):
    return render(request, 'account.html')
def digital(request):
    return render(request, 'digital.html')

