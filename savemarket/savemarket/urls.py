"""savemarket URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from marketapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', views.home, name='home'), #홈화면
    # path('login/', views.login, name='login'), #로그인화면
    # path('beauty/', views.beauty, name='beauty'), #뷰티
    # path('food/', views.food, name='food'), #음식
    # path('stationery/', views.stationery, name='stationery'), #문구
    # path('book/', views.book, name='book'), #책
    # path('life/', views.life, name='life'), #생활
    # path('interior/', views.interior, name='interior'), #인테리어
    # path('pet/', views.pet, name='pet'), #펫
    # path('digital/', views.digital, name='digital'), #디지털
    # path('sport/', views.sport, name='sport'), #스포츠
    # path('etc/', views.etc, name='etc'), #etc
    # path('create/', views.create, name='create'), #공구 생성창
    # path('wishlist/', views.wishlist, name='wishlist'), #공구 생성창
    # path('joinlist/', views.joinlist, name='joinlist'), #공구 목록
    # path('chat/', views.chat, name='chat'), #채팅 목록
    # path('alarm/', views.alarm, name='alarm'), #알람 목록
    # path('account/', views.account, name='account'), #회원가입
    path('', include('marketapp.urls'))

]     
