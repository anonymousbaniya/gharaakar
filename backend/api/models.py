from django.db import models

class Consultation(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=50)
    address = models.TextField(blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.phone}"

    class Meta:
        ordering = ['-created_at']

