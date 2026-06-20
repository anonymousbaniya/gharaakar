from django.urls import path
from . import views

urlpatterns = [
    path('book-consultation/', views.book_consultation, name='book_consultation'),
]
