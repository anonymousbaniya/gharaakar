from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from supabase import create_client, Client
from .models import Consultation
import logging

logger = logging.getLogger(__name__)

@api_view(['POST'])
def book_consultation(request):
    name = request.data.get('name')
    phone = request.data.get('phone')
    address = request.data.get('address', '')

    if not name or not phone:
        return Response(
            {"error": "Name and phone number are required."},
            status=status.HTTP_400_BAD_REQUEST
        )

    # 1. Save to local SQLite database
    consultation = Consultation.objects.create(
        name=name.strip(),
        phone=phone.strip(),
        address=address.strip()
    )

    # 2. Try to sync to Supabase
    supabase_synced = False
    supabase_error = None

    supabase_url = getattr(settings, 'SUPABASE_URL', None)
    supabase_key = getattr(settings, 'SUPABASE_KEY', None)


    if supabase_url and supabase_key:
        try:
            # Initialize Supabase client
            supabase: Client = create_client(supabase_url, supabase_key)
            # Insert into 'consultations' table
            response = supabase.table('consultations').insert({
                "name": name.strip(),
                "phone": phone.strip(),
                "address": address.strip()
            }).execute()
            
            # Check response (postgrest client returns data list in response.data)
            if response.data:
                supabase_synced = True

            else:
                logger.error(f"Supabase insertion returned empty data: {response}")
                supabase_error = "Empty response data"
        except Exception as e:
            logger.error(f"Failed to sync with Supabase: {str(e)}")

            supabase_error = str(e)
    else:
        logger.warning("Supabase credentials not configured in settings.")

        supabase_error = "Supabase credentials not configured."

    return Response({
        "status": "success",
        "message": "Consultation booked successfully.",
        "data": {
            "id": consultation.id,
            "name": consultation.name,
            "phone": consultation.phone,
            "address": consultation.address,
            "created_at": consultation.created_at
        },
        "supabase_synced": supabase_synced,
        "supabase_error": supabase_error
    }, status=status.HTTP_201_CREATED)

