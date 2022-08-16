"""likelion_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
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
from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static
from join.views import JoinCreate, JoinList
from products.views import ProductDetailView, ProductDetailAPI
from products.views import ProductRegister
from products.views import ProductRegisterAPI, ProductList, ProductListAPI
from users.views import LoginView
from users.views import RegisterView, UsersAPI
from users.views import home, logout
from rest_framework.urlpatterns import format_suffix_patterns
from authentication.views import registration_view
from rest_framework.authtoken.views import obtain_auth_token
from authentication.views import registration_view, example_view


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home),

    # users
    path('account/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('logout/', logout),
    path('api/account/', UsersAPI.as_view()),

    # product
    path('product/', ProductList.as_view()),
    path('product/register/', ProductRegister.as_view()),
    path('product/<int:pk>/', ProductDetailView.as_view(), name = "product_detail"),
    path('api/product/register/', ProductRegisterAPI.as_view()),
    path('api/product/', ProductListAPI.as_view()),
    path('api/product/<int:pk>/', ProductDetailAPI.as_view()),

    # join
    path('join/create/', JoinCreate.as_view()),
    path('join/', JoinList.as_view()), 
    # path('rest-auth/', include('rest_auth.urls')),
    path('api/auth/register/', registration_view, name='register_user'),
    path('api/auth/login/', obtain_auth_token, name='login'),
    path('api/test/', example_view, name='example_view'),

] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)

urlpatterns = format_suffix_patterns(urlpatterns)