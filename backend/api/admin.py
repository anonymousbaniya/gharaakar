from django.contrib import admin
from .models import Consultation

@admin.register(Consultation)
class ConsultationAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'phone', 'address', 'created_at')
    search_fields = ('name', 'phone', 'address')
    list_filter = ('created_at',)
    readonly_fields = ('created_at',)

