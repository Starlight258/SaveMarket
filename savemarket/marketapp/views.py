from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404

from .serializers import ReviewSerializer
from .models import Review

from django.shortcuts import render

# Create your views here.
# def home(request):
#     return render(request, 'index.html')
# def login(request):
#     return render(request, 'login.html')
# def beauty(request):
#     return render(request, 'beauty.html')
# def food(request):
#     return render(request, 'food.html')
# def stationery(request):
#     return render(request, 'stationery.html')
# def book(request):
#     return render(request, 'book.html')
# def life(request):
#     return render(request, 'life.html')
# def interior(request):
#     return render(request, 'interior.html')
# def pet(request):
#     return render(request, 'pet.html')
# def sport(request):
#     return render(request, 'sport.html')
# def etc(request):
#     return render(request, 'etc.html')
# def create(request):
#     return render(request, 'create.html')
# def wishlist(request):
#     return render(request, 'wishlist.html')
# def joinlist(request):
#     return render(request, 'joinlist.html')
# def chat(request):
#     return render(request, 'chat.html')
# def alarm(request):
#     return render(request, 'alarm.html')
# def account(request):
#     return render(request, 'account.html')
# def digital(request):
#     return render(request, 'digital.html')

class ReviewList(APIView):
    def get(self, request):
        reviews = Review.objects.all()

        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ReviewSerializer(
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ReviewDetail(APIView):
    def get_object(self, pk):
        try:
            return Review.objects.get(pk=pk)
        except Review.DoesNotExist:
            raise Http404
    
    def get(self, request, pk, format=None):
        review = self.get_object(pk)
        serializer = ReviewSerializer(review)
        return Response(serializer.data)
    
    def put(self, request, pk, format=None):
        review = self.get_object(pk)
        serializer = ReviewSerializer(review, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        review = self.get_object(pk)
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)