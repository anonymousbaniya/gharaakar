from django.conf import settings
from django.core.mail import send_mail
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
            supabase: Client = create_client(supabase_url, supabase_key)
            response = supabase.table('consultations').insert({
                "name": name.strip(),
                "phone": phone.strip(),
                "address": address.strip()
            }).execute()

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

    # 3. Send email notification to owner
    notification_email = getattr(settings, 'NOTIFICATION_EMAIL', None)
    email_host_user = getattr(settings, 'EMAIL_HOST_USER', None)

    if notification_email and email_host_user:
        try:
            subject = f"🏠 New Lead: {name.strip()} — Ghar Aakar"
            message = (
                f"नयाँ परामर्श अनुरोध आयो! / New consultation request received!\n"
                f"{'─' * 40}\n\n"
                f"👤  Name    : {name.strip()}\n"
                f"📞  Phone   : {phone.strip()}\n"
                f"📍  Address : {address.strip() or '(not provided)'}\n"
                f"🕐  Time    : {consultation.created_at.strftime('%Y-%m-%d %H:%M:%S UTC')}\n\n"
                f"{'─' * 40}\n"
                f"Supabase synced: {'✅ Yes' if supabase_synced else '❌ No — ' + str(supabase_error)}\n\n"
                f"Reply to this email or call the customer directly.\n"
                f"— Ghar Aakar System"
            )
            send_mail(
                subject=subject,
                message=message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[notification_email],
                fail_silently=False,
            )
            logger.info(f"Email notification sent for lead: {name.strip()}")
        except Exception as e:
            # Never let email failure break the user's form submission
            logger.error(f"Failed to send email notification: {str(e)}")
    else:
        logger.warning("Email notification not sent — EMAIL_HOST_USER or NOTIFICATION_EMAIL not configured.")

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
